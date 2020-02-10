const express = require('express');
const router = express.Router();
const {Course} = require('../model/team');
const auth = require('../middleware/auth');
const admin = require('../middleware/isadmin');
router.get('/',[auth, admin], async (req,res)=>{
    //console.log(req.user._id);
    try {
        const courses = await Course
        .find()
        .sort({name:1});
        res.send(courses);
    }catch(ex){
        res.status(500).send('Something failed');
    }
    
    
});
router.post('/',auth, async (req,res)=>{
    const course = new Course({
        name:req.body.name,
        author: req.body.author,
        tags:req.body.tags,
        isPublished:req.body.isPublished
    })
    try {
        const result = await course.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
});
router.put('/:id', async (req,res)=>{
    const course2 = await Course.findByIdAndUpdate(req.params.id, {
        $set: {
            author: req.body.author,
            isPublished:true
        }
    }, {new:true})
    res.send(course2);
});
router.get('/:id',async (req,res)=>{
    const course = await Course.findById(req.params.id);
    res.send(course);
});
router.delete('/:id',async (req,res)=>{
    const result = await Course.findByIdAndRemove(req.params.id);
    res.send(result);
});
module.exports = router;