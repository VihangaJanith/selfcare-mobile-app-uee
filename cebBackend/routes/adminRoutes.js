const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')


router.post("/admin/reg", async(req, res) => {
    try{
        
        const user = {
            name : req.body.name, 
            email : req.body.email,
            phone : req.body.phone,
            role : req.body.role,
            password : req.body.password,
            confirmPass:req.body.confirmPass
        }

       
        
        const alredyReg = await Admin.findOne({email: req.body.email})
        if(alredyReg){
            res.send ("User already exists" );
            return false;
        }
       
        if(user.password != user.confirmPass){
            res.send("Passwords do not match")
            return false;
        }
        

        const hashPass = await  bcrypt.hash(user.password, 10)
        const userDb = {
            name : req.body.name, 
            email : req.body.email,
            phone : req.body.phone,
            role : req.body.role,
            password : hashPass,
            
        }
        const newUser = new Admin(userDb);
        await newUser.save()
        res.send(newUser);
        
    }catch(err){
        res.send(err)
    }
})



router.post("/admin/login", async(req, res) => {
    try{
        
        const email =req.body.email
        const password = req.body.password
        
        const result = await Admin.findOne({email:email})
        if(!result){
            res.send("User Not found")
            success:false

        }else{
        const isMatch = await bcrypt.compare(password,result.password);
        if(!isMatch){
            res.send("Wrong Password")
            success:false

        } else {

            const token = jwt.sign({userId:result.id,name:result.name,mobile: result.phone, role:result.role, email: result.email }, "perera_cluster")
          
            res.send({token:token,  success:true})

        }
    }
        
    }catch(err){
        res.send(err)
    }

   

})

router.post("/admin/view", async(req, res) =>{
    try{
        const token = req.body.token
        const payload = await jwt.verify(token, "perera_cluster")
        res.send(payload)
       
    }catch(err){
        res.send(err)
    }
})


router.put("/admin/update", async(req, res) =>{
    try{
        const id = req.body.id
       
        const hashPas1= await  bcrypt.hash(req.body.password, 10)
       
        const updateUser = {
            name : req.body.name, 
            email : req.body.email,
            phone : req.body.phone,
            role : req.body.role,
            password : hashPas1,
            
        }
       
        const UpdateUser1 = await Admin.findByIdAndUpdate(id, updateUser)
        res.send(UpdateUser1)

    }catch(err){
        res.send(err)
    }
})


module.exports = router;