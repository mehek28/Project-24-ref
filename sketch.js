const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var player;
var computer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase= new Computerbase(300,random(450,windowHeight-300),200,180);
   playerBase= new Playerbase(1100,random(450,windowHeight-300),200,180);
   player= new Player(1100, 260,100,250);
   computer= new Player(300, 260,100,250);


 }

function draw() {

  background(180);

  computerBase.display();
  playerBase.display();
  player.display();
  computer.display();

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
   







   
   


   //display Player and computerplayer


}
