const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        
    }

},{
    timestamps: true
})

const customerModle = mongoose.model('customer', customerSchema)

module.exports = customerModle