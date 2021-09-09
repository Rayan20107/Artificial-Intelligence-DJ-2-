song1=""

song2=""

rightwristx=""

rightwristy=""

leftwristx=""

leftwristy=""

function draw()
{
    image(video, 0, 0, 500, 500);
}

function preload()
{
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function setup()
{
    canvas=createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotResults);
}

function play()
{
    song1.play();
    song1.setVolume(0.5);
    song1.rate(1);
}

function modelLoaded()
{
    console.log("Model has been initialized");
}

function gotResults(pose)
{
    console.log(pose);
    rightwristx=pose[0].pose.rightWrist.x;
    rightwristy=pose[0].pose.rightWrist.y;
    leftwristx=pose[0].pose.leftWrist.x;
    leftwristy=pose[0].pose.leftWrist.y;
    console.log(rightwristx);
    console.log(rightwristy);
    console.log(leftwristx);
    console.log(leftwristy);
}
