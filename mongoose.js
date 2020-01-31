const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb'));

const courseSchema = new mongoose.Schema({
    name:{type:String, required:true},
    author:String,
    categry:{
        type:String,
        enum:["web", "mobile", "network"],
        required:true
    },
    tags:{
        type:Array,
        validate:{
            validator:function(v){
                return v && v.length > 0;
            },
            message:"A course at list one tag"
        }
    },
    data: {type: Date , default: Date.now()},
    isPublished: Boolean
});


const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
const course = new Course({
    name:"srikanth node",
    author: 'srikanth',
    categry:"-",
    tags:['angular js', 'reactjs'],
    isPublished:true
})
try {
    const result = await course.save();
    console.log(result);
}
catch(ex){
    console.log(ex.message)
}


}

createCourse();

async function getCourses(){
    const courses = await Course
    .find({author:'srikanth', isPublished:true})
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

//getCourses();

// async function updateCourse(id){
//     // const course = await Course.findById(id);
//     // if(!course) return;
//     // course.isPublished = true,
//     // course.author = "another author";
//     // const result = await course.save();
//     // console.log(result);
    
//     // const course = await Course.update({_id:id},{
//     //     $set: {
//     //         author: "srikanth kallem",
//     //         isPublished:false
//     //     }
//     // })


//     // findByIdAndUpdate
//     const course = await Course.findByIdAndUpdate(id, {
//         $set: {
//             author: "kallem",
//             isPublished:true
//         }
//     }, {new:true})
//     console.log(course);
// }

// updateCourse('5e33ef98c20a25305c393d15');


async function removeCourse(id){
    // const result = await Course.deleteOne({_id:id});

    // const result = await Course.deleteMany({_id:id});
    const result = await Course.findByIdAndRemove(id);
    console.log(result);
}
//removeCourse('5e33ef53c7eb8d0b3cf0c072');
