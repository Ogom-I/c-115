nose_x = 0
nose_y = 0
lips = ""

function preload(){
    lips = loadImage("lips.png")
}
function setup() {
    canvas = createCanvas(400,400)
    canvas.center();
video = createCapture(VIDEO);
video.size(400, 400)
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}
 function take_snapshot(){
    save('selfie.png')
 }

 function modelLoaded() {
console.log("Posenet is intialized")
 }


 function gotPoses(results) 
 {
    if(results.length > 0)
    {
    console.log(results)
    nose_x = results[0].pose.nose.x 
    nose_y = results[0].pose.nose.y
    console.log("nose_x = "+ nose_x )
    console.log("nose_y = " +nose_y)
    }
 }

 function draw() {
    image(video, 0, 0, 400, 400)
    image(lips, nose_x -32, nose_y , 70, 70)
 }