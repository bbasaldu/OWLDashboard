import mongoose from 'mongoose';
import Player from './models/players.js';
mongoose
.connect('mongodb+srv://bbasaldua:Animarum505!@cluster0.qsylk.mongodb.net/PracDB?retryWrites=true&w=majority')
.then(() => console.log('connected now'))
export const createPlayer = async (req, res, next) => {
    const createdPlayer = new Player({
        name: req.body.name,
        teamName: req.body.teamName
    })
    const result = await createdPlayer.save();
    res.json(result)
}
export const getPlayers = async(req, res, next) => {
    const name = req.body.name;
    const players = await Player.find({name: name}).exec();
    res.json(players)
}
