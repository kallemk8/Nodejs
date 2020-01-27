const express = require('express');
const router = express.Router();
const Joi = require('joi');
const courses = [
    {id:1, name: "srikanth"},
    {id:2, name: "srikanth 2"},
    {id:3, name: "srikanth 3"}
]
router.get('/',(req,res)=>{
    res.send(courses);
    //res.send([1,2,3]);
});
router.post('/', (req,res)=>{
    const schema = {
        name:Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(404).send(result.error);
        return;
    }
    // if(req.body.name || req.body.name.length<3){
    //     res.status(404).send('Name is required mim 3 char')
    //     return;
    // }
    const course = {
        id:courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});
router.put('/:id',(req,res)=>{
    let course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The couse not found');

    const schema = {
        name:Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(404).send(result.error);
        return;
    }
    course.name = req.body.name;
    
    res.send(course);
})
router.get('/:id',(req,res)=>{
    let course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The couse not found');

    res.send(course);
    //res.send(req.params.id);
});
router.get('/app/posts/:year/:month',(req,res)=>{
    res.send(req.params);
});
router.get('/app/query/:year/:month',(req,res)=>{
    res.send(req.query);
});

router.delete('/:id',(req,res)=>{
    let course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The couse not found');
    const index = courses.indexOf(course);
    courses.splice(index, 1)
    res.send(course);
});


module.exports = router;