const path=require('path');
const express=require('express');
const app=express()
const server=require('http').Server(app)
const io=require('socket.io')(server)
const cv=require('opencv4nodejs')
const spawn = require('child_process').spawn;
// const app=express();

const camImg=new cv.VideoCapture(0);

let processedFrame;
const FPS=30;
const PORT=3000;
// const pathImg=path.join(__dirname, 'index.html');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

setInterval(()=>{
  const frame=camImg.read();
  const process = spawn('python', ['./mask_detector.py',0, frame])
  // const processedFrame = "something"
  process.stdout.on('data', data=>{
    console.log(data)
    const image=cv.imencode('.jpg', data).toString('base64');
    io.emit('image', image)
  })


}, 1000/FPS)

server.listen(PORT)

// const process = spawn('python', ['./mask_detector.py', 0])
