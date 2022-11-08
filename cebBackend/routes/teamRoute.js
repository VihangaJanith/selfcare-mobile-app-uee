const express = require('express');
const router = express.Router();
const Team = require('../models/TeamModel')

router.post('/add', async (req, res) => {
  try {
    const team = {
        userid : req.body.userid,
        teamid : req.body.teamid,
        team_member1 : req.body.team_member1,
        team_member2 : req.body.team_member2,
        team_member3 : req.body.team_member3,
        team_member4 : req.body.team_member4,
        task : req.body.task
    }
    const newTeam = new Team(team)
    await newTeam.save()
    res.send(newTeam)
}catch (err) {
    res.send(err)
}
})

router.get('/', async (req, res) => {
    try {
    const teams = await Team.find()
    res.send(teams)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const team = await Team.findById(Id)
    res.send(team)
    } catch (err) {
        res.send(err)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
    const Id = req.params.id
    const team = await Team.findByIdAndUpdate(Id, req.body)
    res.send(team)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {

    const Id = req.params.id
    const team = await Team.findByIdAndDelete(Id)
    res.send(team)
    } catch (err) {
        res.send(err)
    }
    
})

module.exports = router;