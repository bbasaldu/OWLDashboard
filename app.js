import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import playerRouter from './routes/players-route.js';
import teamRouter from './routes/teams-route.js';
import HttpError from './models/http-error.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//import {createPlayer, getPlayers} from './mongoosev2.js'
//import Player from "./models/players.js";
const app = express();
app.use(bodyParser.json());
//app.use(morgan('common'))
app.use(helmet())
//for static extra files like images and js files
// app.use((req, res, next) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
//     next();
// })
//need for final build
app.use('/assets/owl_logos', express.static(path.join('assets', 'owl_logos')))
app.use(express.static(path.join('public')))

//need for final build
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
    
}
app.use(cors(corsOptions))

//dev cors code
// app.use((req, res, next) =>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
//     next();
// })

app.use('/api/v1/players', playerRouter)
app.use('/api/v1/teams', teamRouter)
//need for final build
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})




app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404)
    throw error;
})

app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unkown error ocurred!'})
})





// app.post('/players', createPlayer)
// app.get('/players', getPlayers)
//app.listen(3000)
//need for final build
mongoose
.connect(`${process.env.DATABASE_URL}`)
.then( async () => {
    console.log('connected app.js...')
    app.listen(process.env.PORT || 5000);
})
.catch(err => {console.log(err)});

//dev code





