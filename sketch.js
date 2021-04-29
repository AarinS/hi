var canvas;
var music;
var surface1,surface2,sruface3,surface4;
var movingBox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    music.play();
    
    canvas = createCanvas(800,600);
    surface1 = createSprite(100,590,160,20);
    surface1.shapeColor ='blue';
    surface2 = createSprite(252,590,156,20)
    surface2.shapeColor = 'yellow';
    surface3 = createSprite(410,590,160,20);
    surface3.shapeColor = 'pink';
    surface4 = createSprite(560,590,160,20);
    surface4.shapeColor = 'green';
    movingBox = createSprite(random(20,750));
    movingBox.velocityY = 15;
    movingBox.scale = 0.5




}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites(); 
    movingBox.bounceOff(edges);


    if(surface1.isTouching(movingBox) && movingBox.bounceOff(surface1)) {
       movingBox.shapeColor = surface1.shapeColor;
    }
    if(surface2.isTouching(movingBox) && movingBox.bounceOff(surface2)) {
        movingBox.shapeColor = surface2.shapeColor;
     }
     if(surface3.isTouching(movingBox) && movingBox.bounceOff(surface3)) {
        movingBox.shapeColor = surface3.shapeColor;
     }
     if(surface4.isTouching(movingBox) && movingBox.bounceOff(surface4)) {
        movingBox.shapeColor = surface4.shapeColor;
     }

     if(surface2.isTouching(movingBox)){
         movingBox.shapeColor = rg(255,128,0);
         movingBox.velocityX = 0;
         music.stop();
        }
     
     




 drawSprites();

}
