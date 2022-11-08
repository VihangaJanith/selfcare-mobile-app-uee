const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TeamSchema = new Schema({
    userid: {
        type: String,
    },
    teamid: {
        type: String,
        required: true
    },
    team_member1: {
        type: String,
        required: true
    },
    team_member2: {
        type: String,
        required: true
    },
    team_member3: {
        type: String,
        required: true
    },
    team_member4: {
        type: String,
        required: true
    },
    task: {
        type: String,
    },
})

const TeamModel = mongoose.model('Teams', TeamSchema)

module.exports = TeamModel