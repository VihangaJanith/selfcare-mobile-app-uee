const express = require('express');
const router = express.Router();
const meter =require('../models/meterReadingModle') 

router.post('/add', async (req, res) => {
  try {
    const meterAdd = {
        customerName : req.body.customerName,
        accountNum : req.body.accountNum,
        totleUnit : req.body.totleUnit,
        summery : req.body.summery
    }
    const newMeterAdd = new meter(meterAdd)
    await newMeterAdd.save()
    res.send(newMeterAdd)
}catch (err) {
    res.send(err)
}
})

router.get('/', async (req, res) => {
    try {
    const allMeter = await meter.find()
    res.send(allMeter)
    } catch (err) {
        res.send(err)
    }

})

router.get('/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const bill = await meter.findById(Id)
    res.send(bill)
    } catch (err) {
        res.send(err)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const edit = await meter.findByIdAndUpdate(Id, req.body)
    res.send(edit)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;