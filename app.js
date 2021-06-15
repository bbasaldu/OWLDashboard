import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import playerRouter from './routes/players-route.js';
import HttpError from './models/http-error.js';
import cors from 'cors';
import path from 'path'
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
app.use(express.static(path.join('public')))

//app.use(cors())

//dev cors code
// app.use((req, res, next) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
//     next();
// })

app.use('/api/v1/players', playerRouter)

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
mongoose
.connect(`${process.env.DATABASE_URL}`)
.then( async () => {
    console.log('connected app.js...')
    app.listen(process.env.PORT || 5000);
})
.catch(err => {console.log(err)});


// mongoose
// .connect(`mongodb+srv://bbasaldua:Animarum505!@cluster0.qsylk.mongodb.net/PracDB?retryWrites=true&w=majority`)
// .then( async () => {
//     console.log('connected app.js...')
//     app.listen(process.env.PORT || 5000);
// })
// .catch(err => {console.log(err)});

