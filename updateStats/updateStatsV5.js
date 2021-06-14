import puppeteer from "puppeteer";
import AdmZip from "adm-zip";
import axios from "axios";
import neatCsv from "neat-csv";
import mongoose from "mongoose";
import Player from "../models/players.js";
mongoose
  .connect(
    "mongodb+srv://bbasaldua:Animarum505!@cluster0.qsylk.mongodb.net/PracDB?retryWrites=true&w=majority",
    { poolSize: 5 }
  )
  .then(async () => {
    console.log("connected updateStats.js");
    const raw_csv = await getAndUnzip();
    const data = await neatCsv(raw_csv);

    //mongoose.connection.close();

    const test_db = [];
    console.log("creating local documents...");
    data.forEach((p) => {
        
      const playerIndex = test_db.findIndex((d) => d.name === p.player_name);

      if (playerIndex === -1) {
        //new player
        const newPlayer = {
          name: p.player_name,
          teamName: p.team_name,
          matches: [],
          stats: {
            all: [],
            byHero: [],
          },
        };
        test_db.push(newPlayer);
        test_db[test_db.length - 1] = updateMatches(
          p,
          test_db[test_db.length - 1]
        );
        test_db[test_db.length - 1] = updateHeroStats(p, test_db[test_db.length - 1])
      } else {
        //update player
        test_db[playerIndex] = updateMatches(p, test_db[playerIndex]);
        test_db[playerIndex] = updateHeroStats(p, test_db[playerIndex])
      }
    });
    //console.log(test_db[0].stats.byHero);
    //console.log(test_db[0].matches[0].maps[0].stats);
    console.log("updating mongoDB with local documents...");
    let rankings = {all:[], byHero:[]}
    for (const p of test_db){
      for (const s of p.stats.all){
        let statRankingIndex = rankings.all.findIndex(stat => stat.name === s.name)
        if(statRankingIndex === -1){
          const newStatRanking = {
            name: s.name,
            rankings: []
          }
          rankings.all.push(newStatRanking)
          statRankingIndex = rankings.all.length-1
        }
        let allStatRankings = rankings.all[statRankingIndex]
        allStatRankings.rankings.push({name: p.name, value: s.value})
        allStatRankings.rankings = allStatRankings.rankings.sort((a,b) => {
          if(a.value > b.value) return 1
          if(a.value < b.value) return -1
          return 0
        })

        
      }

    }
    for (const p of test_db){
      for(const s of p.stats.all){
        const len = rankings.all.find(stat => stat.name === s.name).rankings.length
        const index = rankings.all.find(stat => stat.name === s.name).rankings.findIndex(r => r.name === p.name)
        s.ranking = len-index
        s.percentile = (index+1)/len
      }
    }
    //console.log(test_db[0].stats.all)
    //console.log(rankings.all.length)
    //console.log(rankings.all[0].rankings)
    
    for (const player of test_db){
        try{
            const foundPlayer = await Player.findOne({name: player.name}).exec()
            if(foundPlayer === null){
                const newPlayer = new Player(player)
                try{
                    await newPlayer.save().catch(err => {console.log(err)})
                    console.log(`new player created: ${player.name}`)
                } catch {
                    console.log(player)
                    console.log('error in creating new player...')
                    return;
                }
            } else {
                try{
                    await Player.replaceOne({name:player.name}, player)
                    console.log(`existing player updated:${player.name}` )
                } catch {
                    console.log('error in updating player...')
                    return
                }

            }

        } catch {
            console.log('error in finding player operation....')
            return
        }
    }///////
    mongoose.connection.close();
    console.log("all operations completed...");
  });
function updateMatches(p, curr) {
  const start_time = Object.keys(p)[0];
  const matchIndex = curr.matches.findIndex(
    (m) => m.id === (+p.esports_match_id)
  );
  if (matchIndex === -1) {
    //new match
    const newMatch = {
        //time of first map
      startTime: p[start_time],
      id: +p.esports_match_id,
      tournament: p.tournament_title,
      maps: [],
    //   mapType: p.map_type,
    //   mapName: p.map_name,
      stats: {
        all: [],
        byHero: [],
      },
    };
    curr.matches.push(newMatch);
    curr.matches[curr.matches.length - 1] = updateMatchStats(
      p,
      curr.matches[curr.matches.length - 1]
    );
  } else {
    //update match
    curr.matches[matchIndex] = updateMatchStats(p, curr.matches[matchIndex]);
  }
  return curr;
}
function updateMatchStats(p, m) {
  //console.log('hellooooo')
  m = updateHeroStats(p, m)
  m.maps = updateMatchMaps(p, m.maps)
  return m;
}
function updateMatchMaps(p, maps){
    const start_time = Object.keys(p)[0];
    const mapIndex = maps.findIndex(m => m.name === p.map_name)
    if(mapIndex === -1){
        //new map
        const newMap = {
            name: p.map_name,
            type: p.map_type,
            startTime: p[start_time],
            stats: {
                all: [],
                byHero: []
            }
        }
        maps.push(newMap)
        
        maps[maps.length-1] = updateMatchMapStats(p, maps[maps.length-1])
    }
    else{
        
        maps[mapIndex] = updateMatchMapStats(p, maps[mapIndex])
    }
    return maps

}
function updateHeroStats(p, m){
    if (p.hero_name === "All Heroes") {
      
        //all hero stat
        m.stats.all = updateStats(p, m.stats.all);
      } else {
        //other heroes
        const heroIndex = m.stats.byHero.findIndex((m) => m.name === p.hero_name);
        if (heroIndex === -1) {
          //new hero
          const newHero = {
            name: p.hero_name,
            stats: [],
          };
          m.stats.byHero.push(newHero);
          let heroStats = m.stats.byHero[m.stats.byHero.length - 1].stats;
    
          m.stats.byHero[m.stats.byHero.length - 1].stats = updateStats(
            p,
            heroStats
          );
        } else {
          //existing hero
          let heroStats = m.stats.byHero[heroIndex].stats;
          //console.log('here')
          m.stats.byHero[heroIndex].stats = updateStats(p, heroStats);
        }
      }
      return m
}
function updateMatchMapStats(p, m){
    //console.log(m)
    
    m = updateHeroStats(p, m)
      return m
}

function updateStats(p, arr) {
  const statIndex = arr.findIndex((s) => s.name === p.stat_name);
  if (statIndex === -1) {
    //new stat
    let newStat = {
      name: p.stat_name,
      value: (+p.stat_amount),
      ranking: null,
      percentile: null
    };


    
    arr.push(newStat);
  } else {
    //update stat
    //can assume updated stats will be for groups
    //i.e matches, or maps or all of any but not by match,by map,by hero
    const currStat = arr[statIndex];
    arr[statIndex] = {
      name: currStat.name,
      value: currStat.value + (+p.stat_amount),
      ranking: null,
      percentile: null
    };
    /****** */
    //if weapon accuracy, use avg instead of adding for updated values
    //for getting avgs of anything just use the length of the group its a part of
    //i.e avg deaths = all match deaths/matches etc
    
  }
  return arr;
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
