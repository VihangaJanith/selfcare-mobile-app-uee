const mongoose = require('mongoose')

const Schema = mongoose.Schema

const meterSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    accountNum : {
        type: Number,
        required: true
    },
    totleUnit:{
        type:Number,
        required:true
    },
    summery:{
        type:String,
        
    }

},{
    timestamps: true
})

const meterModle = mongoose.model('meterCeb', meterSchema)

module.exports = meterModle