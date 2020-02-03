const express = require('express');
const mongoose = require('mongoose');
const app = express();
const courses = require('./routes/courses');
const teams = require('./routes/teams');
const population = require('./routes/population');
const player = require('./routes/player');
const country = require('./routes/country');
const home = require('./routes/home');
mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb'));
   
app.set('view engine', 'pug');
app.set('views', './views')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/app/courses', courses);
app.use('/app/teams', teams);
app.use('/app/population', population);
app.use('/api/players', player);
app.use('/api/country', country);
app.use('/', home);
app.listen(5000, ()=> console.log("50000"))


//const startupDebugger = require('debug')('app:startup');
//const dbDebugger = require('debug')('app:db');
//const config = require('config');
// app.use(helmet())
// app.use(morgan())
//console.log('Application:'+ config.get('name'))
//console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
//console.log(`app:${app.get('env')}`);
//process.env.NODE_ENV // undefined
//export NODE_ENV = production
// const helmet = require('helmet');
// const morgan = require('morgan');
// app.use(function(req,res,next){
//     console.log('Loginin');
//     next();
// })
//const port = process.env.PORT || 5000;


// console.log('Before');
// getUser(1, function(user){
//     console.log('user', user);

//     getRepositories(user.githubusername, (reps)=>{
//         console.log('git hub', reps);
//     })
// });

// function getUser(id, callback){
//     setTimeout(()=>{
//         console.log("reading a user form a database ...");
//         callback({id:id, githubusername: "kallem"});
//     }, 2000)
// }

// function getRepositories(username, callback){
//     setTimeout(()=>{
//         console.log('Calling Github app...');
//         callback(['rep1', 'rep2', 'rep3']);
//     },2000)
// }
// // callbacks

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        // resolve(1);
//        reject(new Error('message'))
//     },2000)
    
//     //reject(new Error('Message'))
// });
// p.then(result=>console.log('Result', result))
// .catch(err => console.log('Error', err.message))
// const user = getusers(1);
// user.then(users=>console.log(users))
// function getusers(id){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("reading a user form a database ...");
//             //reject(new Error('Message'));
//            // resolve({id:id, githubusername: "kallem k8"});
//         }, 2000)
//     })
// }

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Aysnc operation 1 .....");
//         resolve({id:2, githubusername: "kallem k8"});
//     }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Aysnc operation 2 .....");
//         resolve({id:3, githubusername: "kallem k8"});
//     }, 2000)
// })
//Promise.all([p1, p2]).then(result=> console.log(result));

//Promise.race([p1, p2]).then(result=> console.log(result))
//promiess

// async function displaycommits() {
//     try{
//         const useraw = await getusers(1);
//         console.log(useraw)
//     }
//     catch(err){
//         console.log('Error', err)
//     }
    
// }
//displaycommits()
//user.then(users=>console.log(users))

//async/await
