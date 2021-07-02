import fs from "fs";
import csv from "csv-parser";
import path from "path";
import Team from "../models/teams.js";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let results = [];
fs.createReadStream(__dirname + "/new_owl_colors.csv")
  .pipe(csv())
  .on("data", (data) => {
    const teamObj = {
      team: data.Team,
      colors: {
        Primary: data.Primary,
        Secondary: data.Secondary,
        Tertiary: data.Tertiary,
      },
    };
    results.push(teamObj);
  })
  .on("end", () => {
    addTeamColors(results)
  });

function addTeamColors(data) {
  mongoose
    .connect(
      "mongodb+srv://bbasaldua:Animarum505!@cluster0.qsylk.mongodb.net/PracDB?retryWrites=true&w=majority"
    )
    .then(async () => {
        for(const item of data){
            try{
                await Team.replaceOne({team: item.team}, item, {upsert:true}).catch(err => console.log(err))
            }
            catch{
                console.log('error')
            }
        }
      mongoose.connection.close();
    });
}
