const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png" ;

function preload() {
     getBackgroundImg(); 
}

function setup(){
    var canvas = createCanvas(1200,700);
    
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
getBackgroundImg();

}
async function getBackgroundImg(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJson=await response.json();
    var dateTime=responseJson.datetime;
    var hour=dateTime.slice(11,13);
    if(hour>=06 && hour<=19){
    bg="sunrise4.png";
    
    }
    else{
        bg="sunset12,png";
    }

    backgroundImg=loadImage(bg)
    }


