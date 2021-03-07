// build your server here and require it from index.js
const express = require('express');

//Uncomment as they become built
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router');

const server = express();

server.use(express.json())

//Uncomment as they become built
server.use('/api/projects' , projectRouter);
server.use('/api/resources' , resourceRouter);
server.use('/api/tasks' , taskRouter);

server.use((err,req,res,next)=>{
    console.log('Time: ', Date.now())
    console.log(err)
    next()
})
server.get('/', ()=>{
    console.log("welcome to my sprint")
})

module.exports = server;

