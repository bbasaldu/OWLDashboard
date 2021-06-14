import puppeteer from "puppeteer";
import AdmZip from "adm-zip";
import axios from "axios";
import neatCsv from "neat-csv";
import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://bbasaldua:Animarum505!@cluster0.qsylk.mongodb.net/PracDB?retryWrites=true&w=majority"
  )
  .then(async () => {
    console.log("connected updateStats.js");
    const raw_csv = await getAndUnzip();
    const data = await neatCsv(raw_csv);

    mongoose.connection.close();
    const start_time = Object.keys(data[0])[0];
    const test_db = [];
    data.forEach((p) => {
      const foundPlayerIndex = test_db.findIndex(
        (e) => p.player_name === e.name
      );
      const start_time = Object.keys(p)[0];
      if (foundPlayerIndex === -1) {
        //create new player
        const newPlayer = {
          name: p.player_name,
          teamName: p.team_name,
          matches: [
            {
              startTime: p[start_time],
              id: +p.esports_match_id,
              tournament: p.tournament_title,
              mapType: p.map_type,
              mapName: p.map_name,
              stats: {
                  all: [],
                  byHero: {}
              }
            },
          ],
          currentStats: {
              all: [],
              byHero: {}
          }
        };
        if(p.hero_name === 'All Heroes'){
            //All heros - pushes current match as first match if new player
            let matchAllStats = newPlayer.matches[0].stats.all            
            matchAllStats.push({name: p.stat_name, value: p.stat_amount})
        } 
        else {
            //By hero
            let matchHeroStats = newPlayer.matches[0].stats.byHero;
            const foundHero = matchHeroStats[p.hero_name]
            if(!foundHero){
                //create hero
                matchHeroStats[p.hero_name] = [{name: p.stat_name, value: p.stat_amount}]
            } else{
                matchHeroStats[p.hero_name].push({name: p.stat_name, value: p.stat_amount})
                //push new stat
            }
            
        }
        test_db.push(newPlayer)

      } else {
        //update player
        //update existing match stats
        //add matches
        //update existing hero stats
        //add heros/stats
        const foundPlayer = test_db[foundPlayerIndex]
        const foundMatchIndex = foundPlayer.matches.findIndex(match => match.id === (+p.esports_match_id))
        if(foundMatchIndex === -1){
            //new match
            foundPlayer.matches.push({
                startTime: p[start_time],
                id: +p.esports_match_id,
                tournament: p.tournament_title,
                mapType: p.map_type,
                mapName: p.map_name,
                stats: {
                    all: [],
                    byHero: {}
                }
              })
            const newMatchIndex = foundPlayer.matches.length-1;
            //foundPlayer.matches.findIndex(match => match.id === (+p.esports_match_id))
            if(p.hero_name === 'All Heroes'){
                //All heros - pushes current match as first match if new player
                let matchAllStats = foundPlayer.matches[newMatchIndex].stats.all            
                matchAllStats.push({name: p.stat_name, value: p.stat_amount})
            } 
            else {
                //By hero
                let matchHeroStats = foundPlayer.matches[newMatchIndex].stats.byHero;
                const foundHero = matchHeroStats[p.hero_name]
                if(!foundHero){
                    //create hero
                    matchHeroStats[p.hero_name] = [{name: p.stat_name, value: p.stat_amount}]
                } else{
                    matchHeroStats[p.hero_name].push({name: p.stat_name, value: p.stat_amount})
                    //push new stat
                }
                
            }
            
        }
        else {
            updateStats(p, foundPlayer, foundMatchIndex)
            // if(p.hero_name === 'All Heroes'){
            //     let matchAllStats = foundPlayer.matches[foundMatchIndex].stats.all
            //     matchAllStats.push({name: p.stat_name, value: p.stat_amount})
                
            // } 
            // else {
            //     //By hero
                
            //     let matchHeroStats = foundPlayer.matches[foundMatchIndex].stats.byHero;
            //     const foundHero = matchHeroStats[p.hero_name]
                
            //     if(!foundHero){
            //         //create hero
            //         matchHeroStats[p.hero_name] = [{name: p.stat_name, value: p.stat_amount}]
            //     } else{
            //         matchHeroStats[p.hero_name].push({name: p.stat_name, value: p.stat_amount})
            //         //push new stat
            //     }
                
            // }
        }
      }
    });
    
    test_db.forEach(player => {
        console.log(`${player.name}`)
        //console.log(player.matches[0].stats.all)
        console.log(player.matches[0].stats.byHero)
    })

  });

function updateStats(p, player, matchIndex){
    if(p.hero_name === 'All Heroes'){
        let matchAllStats = player.matches[matchIndex].stats.all
        matchAllStats.push({name: p.stat_name, value: p.stat_amount})
        
    } 
    else {
        //By hero
        
        let matchHeroStats = player.matches[matchIndex].stats.byHero;
        const foundHero = matchHeroStats[p.hero_name]
        
        if(!foundHero){
            //create hero
            matchHeroStats[p.hero_name] = [{name: p.stat_name, value: p.stat_amount}]
        } else{
            matchHeroStats[p.hero_name].push({name: p.stat_name, value: p.stat_amount})
            //push new stat
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
