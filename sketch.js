var Engine = Matter.Engine, World = Matter.World, Events = Matter.Events, Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var j = 0; j <=width; j = j + 80) {
     divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
function draw() {
  background("gray");
  textSize(20)
  Engine.update(engine);
  ground.display();
  
   for (var x = 0; x < plinkos.length; x++) {
     plinkos[x].display();
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(350, 450), 10,10));
   }
  for (var y = 0; y < particles.length; y++) {
     particles[y].display();
   }
   for (var z = 0; z < divisions.length; z++) {
     divisions[z].display();
   }
}