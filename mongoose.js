const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb'));

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    data: {type: Date , default: Date.now()},
    isPublished: Boolean
});


const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
const course = new Course({
    name: "Nodeje course",
    author: 'srikanth',
    tags:['angular js', 'reactjs'],
    isPublished:true
})

const result = await course.save();
    console.log(result);

}

//createCourse();

async function getCourses(){
    const courses = await Course
    //.find({author:'srikanth', isPublished:true})
    //.find({price:{$gt:10}}) // gtrthan


    //add and or logic
    // .find()
    // or([{author:"srikanth"}, {isPublished:true}])
    // .and([])


    //regular express
    //start with mosh
    //.find({author: /^srikanth/})
    // end with hamdani
    //.find({author:/hamdan$/i})

    //contains mosh
    //.find({author:/.*Mosh.*/i})


    //.skip({pa})
    .limit(10)
    .sort({name:1})
    .select({name:1, tags:1});
    console.log(courses)
}

getCourses();