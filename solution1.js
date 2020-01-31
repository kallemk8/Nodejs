const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb'));
const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    data:Date,
    isPublished:Boolean,
    price:Number
});

const Course = mongoose.model('Course', courseSchema);
Course
    .find({isPublished:true, tags:"backend"})
    .sort({name:1})
    .select({name:1, author:1})