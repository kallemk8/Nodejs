const path = require('path');
const os = require('os');
const fs = require('fs');
var totalmemory = os.totalmem();
var freememory = os.freemem();
const files = fs.readdirSync('./')
var _ = require('underscore');
var result = _.contains([1,2,3], 1);
console.log(result);
//console.log(files)
// fs.readdir('$', function(err, files){
//     if(err) console.log('Error', err)
//     else console.log('result', files)
// });
// console.log('total memory ' + totalmemory);
// console.log(`Total Memory: ${totalmemory}`)
// console.log(`Free Memory: ${freememory}`)
// var pathlist = path.parse(__filename);
// console.log(pathlist)
// const loggerv = require('./logger');
// loggerv('srikanth')



// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('messageLogged',function(arg){
//     console.log('listner called', arg)
// })
// emitter.emit('messageLogged', {id:1, url:"http://"})

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', (arg)=>{
    console.log('Listener called', arg);
})

logger.log('message');


const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection',(socket)=>{
    console.log('new connection')
})
server.listen(3000);
console.log('listening on port 3000 .....');
