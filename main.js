function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
   }
   
   function modelLoaded() {
       console. log('PoseNet Is Initialized!');
   }
   
   function draw(){
       background('#5cffcb')
       textSize(70)
   }
   
   function gotPoses(results)
{
if(results. length > 0)
{
console. log(results) ;
leftWristX = results [0].pose.leftWrist.x;
leftWristY = results [0].pose.leftWrist.y;
rightWristX = results [0].pose.rightWrist.x;
rightWristtY = results [0].pose.rightWrist.y;
console.log("leftWristX = " - rightWristX +" leftWristY = " - righttWristY) ;
floor()
var difference = console.log("leftWristX = " - rightWristX +" leftWristY = " - righttWristY) ;
}
}
   function text(){
    text('REYANSH,90 ,900 ')
   }

textSize()=difference   
