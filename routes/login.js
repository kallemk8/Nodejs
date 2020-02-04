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
    
    let users = await User.findOne({email:req.body.email});
    if(!users) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, users.password);
    if(!validPassword) return res.status(400).send('Invalid email or password');
    const token = jwt.sign({_id:users._id, isAdmin:true}, 'jwtPrivateKey');
    delete users.password;
    const result = {
        "result":"success",
        "user":users,
        "jwt":token
    }
    res.send(result);
   
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