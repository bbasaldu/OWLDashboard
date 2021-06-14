import HttpError from "../models/http-error.js";
import pkg from "express-validator";
const { validationResult } = pkg;
import Player from "../models/players.js";



export const getPlayers = async (req, res, next) => {
    let players;
    try{
      //limit()
        players = await Player.find({}, 'name teamName').exec();
    } catch {
        const error = new HttpError('Something went wrong in finding player', 500);
        return next(error)
    }
    if(players.length === 0){
        const error =  new HttpError('No players found', 205)
        return next(error)
    }
  res.status(200).json({players});
};

export const getPlayerByName = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError("Invalid inputs", 422);
    }
    const name = req.params.name;
    //console.log(name)
    let foundPlayer
    try{
      foundPlayer = await Player.findOne({name}).exec();
      if(foundPlayer === null) {
        const error = HttpError('Could not fine player with provided name', 404)
        return next(error)
      }
    } catch {
      const error = new HttpError('Something went wrong in finding player', 500)
      return next(error)
    }

    // let foundPlayer;
    // try{
    //     foundPlayer = await Player.find({ name: name }).exec();
    // } catch {
    //     const error = new HttpError('Something went wrong in finding player', 500);
    //     return next(error)
    // }
    // if(foundPlayer.length === 0){
    //     const error =  new HttpError('Could not find player with provied name.', 404)
    //     return next(error)
    // }
    
  res.status(200).json({ foundPlayer});
};

export const addPlayer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs", 422);
  }
  const { name, teamName } = req.body;
  const foundPlayer = await Player.find({ name: name }).exec();
  if (foundPlayer.length === 0) {
    const newPlayer = new Player({
      name,
      teamName,
    });
    try {
      await newPlayer.save();
    } catch (err) {
      const error = new HttpError("creating player failed", 500);
      return next(error);
    }
  } else {
      //console.log(foundPlayer)
      await Player.updateOne({name}, {name, teamName})
  }
  res.status(201).json({ msg: "POST request sent" }); //convention to return 201 on successful post
};

