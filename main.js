noseX = 0;
noseY = 0;

Difference = 0;

leftWrist = 0;
rightWrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("noseX = " + noseX , "noseY = " + noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;

        Difference = floor(leftWrist - rightWrist);

        console.log(" LeftWrist = " + leftWrist, " RightWrist = " + rightWrist , " Difference = " + Difference);
    }
}

function modelLoaded() {
    console.log("!!!!PoseNet Model has been initialized!!!!");
}

function draw() {
    background("#969A97");
  
   fill("#1999e3");
   textSize(Difference);
   text("abcd", noseX, noseY);
}