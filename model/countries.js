const mongoose = require('mongoose');
const Countries = mongoose.model('countries', new mongoose.Schema({
    name:{type:String, required:true},
    subname:String,
    aboutUs:String,
    displayPic:String,
}));

exports.Countries = Countries;