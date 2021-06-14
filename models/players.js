import mongoose from 'mongoose';
const playersSchema = mongoose.Schema({
    name: {type: String, required: true},
    teamName: {type: String, required: true},
    matches: {type: Array},//all matches they were in
    stats: {type: Object}//AllHeroes: [], Heroes: {hero#1: [], ...}
})
export default mongoose.model('Player', playersSchema)
