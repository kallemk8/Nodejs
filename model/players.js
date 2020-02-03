const mongoose = require('mongoose');
const countriesSchema =  new mongoose.Schema({
    name:{type:String, required:true},
    subname:String,
    aboutUs:String,
    displayPic:String,
});
const Players = mongoose.model('players', new mongoose.Schema({
    name:{type:String, required:true},
    subname:String,
    DOB:Date,
    height:Number,
    country:countriesSchema,
    aboutUs:String,
    role:String,
    battingStyle:String,
    bowlingStyle:String,
    displayPic:String,
    teams:[]
}));

exports.Players = Players;