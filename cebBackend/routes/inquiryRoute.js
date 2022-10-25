const express = require('express');
const router = express.Router();
const Inquiry = require('../models/InquiryModel')

router.post('/add', async (req, res) => {
  try {
    const inquiry = {
        name : req.body.name,
        email : req.body.email,
        inquiry : req.body.inquiry,
        userId : req.body.userId


    }
    const newInquiry = new Inquiry(inquiry)
    await newInquiry.save()
    res.send(newInquiry)
}catch (err) {
    res.send(err)
}
})

router.get('/', async (req, res) => {
    try {
    const inquiries = await Inquiry.find()
    res.send(inquiries)
    } catch (err) {
        res.send(err)
    }

})

router.get('/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const inquiry = await Inquiry.findById(Id)
    res.send(inquiry)
    } catch (err) {
        res.send(err)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const inquiry = await Inquiry.findByIdAndUpdate(Id, req.body)
    res.send(inquiry)
    } catch (err) {
        res.send(err)
    }



})

router.delete('/:id', async (req, res) => {
    try {

    const Id = req.params.id
    const inquiry = await Inquiry.findByIdAndDelete(Id)
    res.send(inquiry)
    } catch (err) {
        res.send(err)
    }
    
})



module.exports = router;