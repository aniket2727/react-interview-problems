

// code is written by aniket kadam
// node is interview questions

const express=require('express');
const http=require('http');
const fs=require('fs');
const { error } = require('console');
const filename='file.txt';

const httpServer=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plane'});
    res.end("hello world");
})


// read file
fs.readFile(filename,'utf8',(data,error)=>{
    if(error){
        console.log(error)
        return
    }
    console.log(data)
})

//write file
fs.writeFile('output.txt',"my name is king kong",(error)=>{
    if(error){
        console.log(error);
        return
    }
    console.log('file is created');
})

// write down all files 
fs.readdir('.',(error,files)=>{
    if(error){
        console.log(error)
        return
    }

    files.forEach((item)=>{
        console.log(item);
    })
})

// event emitters
const EventEmitter = require('events');
const emitter=new EventEmitter();


emitter.on('greet',(name)=>{
    console.log(`Hello, ${name}!`);
})


emitter.emit('greet','aniket');

const port=9009;
httpServer.listen(port,()=>{
    console.log("run server");
})
