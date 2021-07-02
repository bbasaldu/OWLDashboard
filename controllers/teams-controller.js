import HttpError from "../models/http-error.js";
import pkg from "express-validator";
const { validationResult } = pkg;
import Team from '../models/teams.js'

export const getTeamColors = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError("Invalid inputs", 422);
    }
    const team = req.params.name;
    //console.log(name)
    let foundTeam
    try{
      foundTeam = await Team.findOne({team}, 'colors').exec();
      if(foundTeam === null) {
        const error = HttpError('Could not find team with provided name', 404)
        return next(error)
      }
    } catch {
      const error = new HttpError('Something went wrong in finding team', 500)
      return next(error)
    }
    res.status(200).json(foundTeam);
};