const mongoose = require('mongoose');
const Course = mongoose.model('teams', new mongoose.Schema({
    name:{type:String, required:true},
    author:String,
    tags:[String],
    data: {type: Date , default: Date.now()},
    isPublished: Boolean
}));

exports.Course = Course;