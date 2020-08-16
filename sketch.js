const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box3,box4,box5,log3,log4;
var box6,box7,box8,box9,log10;
var ball,slingShot;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,240,50,50);
    box2 = new Box(600,240,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(650,240,50,50);
    box5 = new Box(800,240,50,50);
    log = new Log(700,300,300,20)
    box6 = new Box(750,240,50,50);
    box7 = new Box(700,240,50,50);
    box8 = new Box(650,240,50,50);
    ball = new Ball(100,100);
    box9 = new Box(700,240,50,50);
    slingShot = new SlingShot(ball.body,{x:100, y:100});

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ball.display();
    slingShot.display();
}
function mouseDragged(){ 
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY}); 
}
function mouseReleased(){ 
    slingShot.fly(); 
}
function keyPressed(){ 
    if(keyCode === 32){ 
    slingShot.attach(ball.body); } 
}
async function getTime(){    
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime
    var hour = dateTime.slice(11,13)
    console.log (hour)
    if (hour>= 06 && hour<= 19){
        bg = "black"
    }
    else {
        bg = "blue"
    }
    }