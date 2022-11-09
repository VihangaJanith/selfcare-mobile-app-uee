const express = require('express');
const router = express.Router();
const customer =require('../models/customerModel') 

router.post('/register', async (req, res) => {
  try {
    const registerAdd = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone
    }
    const newregisterAdd = new customer(registerAdd)
    await newregisterAdd.save()
    res.send(newregisterAdd)
}catch (err) {
    res.send(err)
}
})

router.post('/login', async (req, res) => {
    try {
     
         
         const  email = req.body.email
          const password = req.body.password
       
    
      const newlogin = new customer.findOne({email,password})
      res.send(newlogin)
    } catch (err) {
        res.send(err)
    }
  })

// router.get('/', async (req, res) => {
//     try {
//     const allCustomers = await customer.find()
//     res.send(allCustomers)
//     } catch (err) {
//         res.send(err)
//     }

// })

router.get('/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const user = await customer.findById(Id)
    res.send(user)
    } catch (err) {
        res.send(err)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const edit = await customer.findByIdAndUpdate(Id, req.body)
    res.send(edit)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;