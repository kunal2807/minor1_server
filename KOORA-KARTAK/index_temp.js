const cv=require('opencv4nodejs')
const spawn = require('child_process').spawn;

const process = spawn('python', ['./MASK_DETECTOR.py', 0])

console.log("NODE: CAMIMG")
// // const camImg=new cv.VideoCapture(0);

// // let processedFrame;
// const FPS=30;

// console.log("NODE: INTERVAL START")
// setInterval(()=>{
//   // const frame=camImg.read();
//   console.log("NODE: FRAMING DONE")
//   const process = spawn('python', ['./mask_detector.py'])
//   // const processedFrame = "something"
//   console.log("NODE: SPAWN DONE")
//   process.stdout.on('data', data=>{
//     console.log(data)
//   })

// }, 1000/FPS)