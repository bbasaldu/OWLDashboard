import puppeteer from "puppeteer";
import AdmZip from "adm-zip";
import axios from "axios";
import neatCsv from "neat-csv";
import mongoose from "mongoose";
import Player from "../models/players";
import HttpError from "../models/http-error";
mongoose
  .connect(
    "mongodb+srv://bbasaldua:Animarum505!@cluster0.qsylk.mongodb.net/PracDB?retryWrites=true&w=majority"
  )
  .then(async () => {
    console.log("connected updateStats.js");
    const raw_csv = await getAndUnzip();
    const data = await neatCsv(raw_csv);
    
    //mongoose.connection.close();
    const start_time = Object.keys(data[0])[0];
    const test_db = [];
    data.forEach(async (p) => {
        const start_time = Object.keys(p)[0];
      try{
        const foundPlayer = await Player.findOne({name: p.player_name}).exec()
      }
      catch{
          const error = new HttpError('Something went wrong', 500)
          
      }
      if(foundPlayer === null){
          //new player
            const newPlayer = new Player({
                name: p.player_name,
                teamName: p.teamName,
                matches: [
                    {
                      startTime: p[start_time],
                      id: +p.esports_match_id,
                      tournament: p.tournament_title,
                      mapType: p.map_type,
                      mapName: p.map_name,
                      stats: {
                        all: [],
                        byHero: {},
                      },
                    },
                  ],
                  currentStats: {
                    all: [],
                    byHero: {},
                  },
            })
            updateMatchStats(p, newPlayer, 0)
            try{
                await newPlayer.save();
            } catch {
                const error = new HttpError('error', 500)
            }
      }
      else {
        //update
        //const foundPlayer = test_db[foundPlayerIndex];
        const foundMatchIndex = foundPlayer.matches.findIndex(
          (match) => match.id === +p.esports_match_id
        );
        if (foundMatchIndex === -1) {
          //new match
          foundPlayer.matches.push({
            startTime: p[start_time],
            id: +p.esports_match_id,
            tournament: p.tournament_title,
            mapType: p.map_type,
            mapName: p.map_name,
            stats: {
              all: [],
              byHero: {},
            },
          });
          const newMatchIndex = foundPlayer.matches.length - 1;
          updateMatchStats(p, foundPlayer, newMatchIndex);
        } else {
          updateMatchStats(p, foundPlayer, foundMatchIndex);
        }
        foundPlayer.save()

      }
      
        
      
    });
    mongoose.connection.close();
    // console.log(
    //   test_db.find((player) => player.name === "Doha").currentStats.all
    // );
    // const Doha = test_db.find((player) => player.name === "Doha");
    // console.log(Doha.currentStats.byHero['Echo'])
    
  });

function updateMatchStats(p, player, matchIndex) {
  if (p.hero_name === "All Heroes") {
    let matchAllStats = player.matches[matchIndex].stats.all;
    const stat = { name: p.stat_name, value: +p.stat_amount };
    matchAllStats.push(stat);
    updateCurrentStats(player, stat, true, null);
  } else {
    //By hero

    let matchHeroStats = player.matches[matchIndex].stats.byHero;
    const foundHero = matchHeroStats[p.hero_name];
    const stat = { name: p.stat_name, value: +p.stat_amount };
    if (!foundHero) {
      //create hero
      matchHeroStats[p.hero_name] = [stat];
    } else {
      matchHeroStats[p.hero_name].push(stat);
      //push new stat
    }
    updateCurrentStats(player, stat, false, p.hero_name)
  }
}

function updateCurrentStats(player, stat, allHeroes, hero) {
  if (allHeroes) {
    const foundStatIndex = player.currentStats.all.findIndex(
      (s) => s.name === stat.name
    );
    if (foundStatIndex === -1) {
      //new stat
      player.currentStats.all.push(stat);
    } else {
      const { name, value } = player.currentStats.all[foundStatIndex];
      const newStat = { name, value: value + stat.value };
      player.currentStats.all[foundStatIndex] = newStat;
    }
  }
  else {
      const foundHero = player.currentStats.byHero[hero]
      if(!foundHero){
        player.currentStats.byHero[hero] = [stat]
      } else{
        const foundStatIndex = foundHero.findIndex(s => s.name === stat.name)
        if(foundStatIndex === -1){
            foundHero.push(stat)
        }
        else {
            const {name, value} = foundHero[foundStatIndex]
            foundHero[foundStatIndex] = {name, value: value + (stat.value)}
        }
      }
  }
}

async function getPlayerStatsFileUrl() {
  const url = "https://overwatchleague.com/en-us/statslab";
  let link;
  try {
    console.log("retrieving link...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    //networkidle0 is no more incoming connnections for some time -> javascript code has loaded
    await page.waitForSelector("ul[class=sl-downloads]");
    //wait for links to be rendered by javascript
    const ul = await page.$("ul[class=sl-downloads]");
    link = await ul.$$eval("a", (nodes) => nodes[3].getAttribute("href"));
    //2021 stats are the 3rd link, for now...
    await browser.close();
  } catch (err) {
    console.log(err);
  }
  return link;
}
async function getAndUnzip() {
  const fileURL = await getPlayerStatsFileUrl();
  console.log(`Loading url: ${fileURL}`);
  const res = await axios.get(fileURL, {
    responseType: "arraybuffer",
  });
  const resData = await res.data;
  const zip = new AdmZip(resData);
  const zipEntries = zip.getEntries();

  console.log(`Unzipped file: ${zipEntries[0].entryName}`);
  return zip.readAsText(zipEntries[0]);
}
