song1="music.mp3";
song2="music2.mp3";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet is Initialised");
}
    
function draw()
{
    image(video,0,0,600,500);
    fill("#2803fc");
    stroke("#daed2f")

}


function preload()
{
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}
function play()
{
    song.play();
} 