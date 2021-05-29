difference=0;
wristLeftX=0;
wristRightX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        wristLeftX = results[0].pose.leftWrist.x;
        wristrightX = results[0].pose.rightWrist.x;
        difference = floor(wristLeftX - wristRightX);
    }
}
function draw(){
    background('#6C91C2');
  textSize(difference);
  fill('#FFE787');
text('VIVAAN', 50, 400);
}