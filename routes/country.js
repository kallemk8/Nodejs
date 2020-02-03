const express = require('express');
const router = express.Router();
const {Countries} = require('../model/countries');
router.get('/',async (req,res)=>{
    const Country = await Countries
        .find();
    res.send(Country);
    
});
router.post('/',async (req,res)=>{
    const Country = new Countries({
        name:req.body.name,
        subname:req.body.subname,
        aboutUs:req.body.aboutUs,
        displayPic:req.body.displayPic
        
    })
    try {
        const result = await Country.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
});
router.put('/:id', async (req,res)=>{
    const Countriy = await Countries.findByIdAndUpdate(req.params.id, {
        $set: {
            name:req.body.name,
            subname:req.body.subname,
            aboutUs:req.body.aboutUs,
            displayPic:req.body.displayPic
        }
    }, {new:true})
    res.send(Countriy);
});
router.get('/:id',async (req,res)=>{
    const Country = await Countries.findById(req.params.id);
    res.send(Country);
});
router.delete('/:id',async (req,res)=>{
    const Country = await Countries.findByIdAndRemove(req.params.id);
    res.send(Country);
});
module.exports = router;