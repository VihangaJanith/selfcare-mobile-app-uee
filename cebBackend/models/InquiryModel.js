const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    userId: {
        type: String,
        
    },
    
    inquiry: {
        type: String,
        required: true
    },
    reply : {
        type: String,
        default: "Our team will contact you soon"
    }
},{
    timestamps: true
})

const InquiryModel = mongoose.model('InquiryCEB', InquirySchema)

module.exports = InquiryModel