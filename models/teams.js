import mongoose from 'mongoose';
const teamsSchema = mongoose.Schema({
    team: {type: String, required: true},
    colors: {type: Object}
})
export default mongoose.model('Team', teamsSchema)