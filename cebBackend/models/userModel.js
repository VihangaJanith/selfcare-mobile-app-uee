const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "1"
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const UserModel = mongoose.model('UsersCEB', UserSchema)

module.exports = UserModel