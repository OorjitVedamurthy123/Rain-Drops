const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
let rains = [];

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    for (let i = 0; i < 100; i++) {
        rains.push(new Rain());
      }
}

function draw(){
    background(0);
    for (let i = 0; i < rains.length; i++) {
        
        rains[i].display();
      }
    Engine.update(engine);
    
    
    
   
}
