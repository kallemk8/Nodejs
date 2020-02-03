const express = require('express');
const router = express.Router();
const {Players} = require('../model/players');
router.get('/',async (req,res)=>{
    const Player = await Players
        .find();
    res.send(Player);
    
});
router.post('/',async (req,res)=>{
    const Player = new Players({
        name:req.body.name,
        subname:req.body.subname,
        DOB:req.body.DOB,
        height:req.body.height,
        country:req.body.country,
        aboutUs:req.body.aboutUs,
        role:req.body.role,
        battingStyle:req.body.battingStyle,
        bowlingStyle:req.body.bowlingStyle,
        displayPic:req.body.displayPic,
        teams:req.body.teams
        
    })
    try {
        const result = await Player.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
});
router.put('/:id', async (req,res)=>{
    const Player = await Players.findByIdAndUpdate(req.params.id, {
        $set: {
            name:req.body.name,
            subname:req.body.subname,
            DOB:req.body.DOB,
            height:req.body.height,
            country:req.body.country,
            aboutUs:req.body.aboutUs,
            role:req.body.role,
            battingStyle:req.body.battingStyle,
            bowlingStyle:req.body.bowlingStyle,
            displayPic:req.body.displayPic,
            teams:req.body.teams
        }
    }, {new:true})
    res.send(Player);
});
router.get('/:id',async (req,res)=>{
    const Player = await Players.findById(req.params.id);
    res.send(Player);
});
router.delete('/:id',async (req,res)=>{
    const result = await Players.findByIdAndRemove(req.params.id);
    res.send(result);
});
module.exports = router;