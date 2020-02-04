const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {User} = require('../model/users');
const jwt = require('jsonwebtoken')
router.get('/',async (req,res)=>{
    const Users = await User
        .find()
        .sort({name:1});
    res.send(Users);
    
});
router.post('/',async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const Users = new User({
        name:req.body.name,
        email: req.body.email,
        password:await bcrypt.hash(req.body.password, salt)
    })
    try {
        const result = await Users.save();
        const token = jwt.sign({_id:result._id}, 'jwtPrivateKey');
        res.header('x-auth-token', token).send(result);
       // res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
});
router.put('/:id', async (req,res)=>{
    const course2 = await User.findByIdAndUpdate(req.params.id, {
        $set: {
            author: req.body.author,
            isPublished:true
        }
    }, {new:true})
    res.send(course2);
});
router.get('/:id',async (req,res)=>{
    const course = await User.findById(req.params.id);
    res.send(course);
});
router.delete('/:id',async (req,res)=>{
    const result = await User.findByIdAndRemove(req.params.id);
    res.send(result);
});
module.exports = router;