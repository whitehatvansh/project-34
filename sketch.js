//Create variables here
var dog,happyDog,dogimg;
var database;
var FoodStock;
var FoodS;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database()

  dog = createSprite(400,350,100,100)
  dog.addImage(dogimg)
  dog.scale = 0.3

  FoodStock = database.ref('Food')
  FoodStock.on("value",readStock)
  
}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    FoodS = FoodS - 1;
    writeStock(FoodS)
    dog.addImage(happyDog)
  }



  drawSprites();

  fill("black")
  textSize(12)
  text("Food Remaining = " + FoodS, 400,200)
  //add styles here

  

}
//function to read values from database

function readStock(data) {
  FoodS = data.val()
}

//function to write value in database

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}

