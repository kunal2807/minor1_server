const path=require('path');
const express=require('express');
const app=express()
const server=require('http').Server(app)
const io=require('socket.io')(server)
let encode = require('image-encode')
// const cv=require('opencv4nodejs');
// const { type } = require('os');
// const { exit } = require('process');
const spawn = require('child_process').spawn;
var fs=require('fs')
// const btoa = require('window').btoa
// const app=express();

// const camImg=new cv.VideoCapture(0);

// let processedFrame;
// const FPS=30;
const PORT=3000;
// const pathImg=path.join(__dirname, 'index.html');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

const process = spawn('python', ['./MASK_DETECTOR.py'])
process.stdout.on('data', data=>{
  const frame =data.toString()
  console.log(frame)
  // var frame = Buffer.from(encode(data, [2,2], 'jpg'));
  // console.log('OUTPUTFRAME: ', frame)
  // console.log('OUTPUT DATA: ', data)
  io.emit('image', frame)
})

server.listen(PORT)

// const process = spawn('python', ['./mask_detector.py', 0])
