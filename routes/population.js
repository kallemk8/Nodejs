const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    bio:String,
    website:String,
});

const Authors = mongoose.model('authors', authorSchema);

// const Movies = mongoose.model('movies', new mongoose.Schema({
//     name:String,
//     author:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Author"
//     }
// }));

const Movies = mongoose.model('movies', new mongoose.Schema({
    name:String,
    author:[authorSchema]
}));

router.post('/',async (req,res)=>{
    const course = new Movies({
        name:req.body.name,
        author:[new Authors({
            name:"srikanth"
        }),
        new Authors({
            name:"srikanth 2"
        })]
    })
    try {
        const result = await course.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
});

router.post('/addAuthors',async (req, res)=>{
    const limitauthor = new Authors({
        name:"srikanth 4"
    })
    const movie = await Movies.findById('5e37f4c354b04a0718ada35c');
    movie.author.push(limitauthor);
    try {
        const result = await movie.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
})

router.post('/removeauthor', async (req, res)=>{
    const movie = await Movies.findById('5e37f4c354b04a0718ada35c');
    const author = movie.author.id('5e37f77bebeed82f101f7ac5');
    author.remove();
    movie.save();
    res.send(movie);
})
router.post('/newAuthor',async (req,res)=>{
    const course = new Authors({
        name:req.body.name,
        bio:req.body.bio,
        website:req.body.website
    })
    try {
        const result = await course.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex.message)
    }
});

module.exports = router;