var polvin, polvinImg, polvinRip
var ocean, oceanImg


function preload(){
oceanImg=loadImage("sea.png")
polvinImg = addAnimation("polvo1.png, polvo2.png, polvo3.png")
}

function setup() {
createCanvas(windowWidth, windowHeight);

 ocean = createSprite(width/2, height/2)
 ocean.addImage(oceanImg)

 polvin = createSprite(200,200,1,1)
 polvin = addImage(polvinImg)
 polvin = addImage()
 
}

function draw() {
    background("black")
ocean.velocityY=3
if(ocean.y>height){
ocean.y = ocean.height/2
}
 drawSprites()
}
