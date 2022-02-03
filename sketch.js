var gameState = "level1"
var bgImg, bg
var rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8

var player
function preload() {
  bgImg = loadImage("space.jpeg")
  player.loadImage("gamer.png")
}

function setup() {
  createCanvas(1600, 800);
  bg = createSprite(0, 0, 1700, 20)
  bg.addImage(bgImg)
  bg.scale = 6

  player = createSprite(100, 750, 20, 20)

  rect1 = createSprite(110, 700, 150, 30)
  rect2 = createSprite(430, 542, 150, 30)
  rect3 = createSprite(202, 328, 150, 30)
  rect4 = createSprite(711, 364, 150, 30)
  rect5 = createSprite(482, 306, 150, 30)
  rect6 = createSprite(362, 105, 150, 30)
  rect7 = createSprite(704, 215, 150, 30)
  rect8 = createSprite(150, 30, 150, 30)
}

function draw() {
  if (gameState === "level1") {
    background("white");
    bg.visible = true
    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    //rect1.visible = false

    textSize(30)
    text("PRO PARKOUR", width / 2, 70)
    player.visible = false
    if (keyDown("space")) {
      gameState = "level2"
    }
  }

  if (gameState === "level2") {
    background("black")
    bg.visible = false
    rect1.visible = true
    rect2.visible = true
    rect3.visible = true
    rect4.visible = true
    player.visible = true
    rect5.visible = true
    rect6.visible = true
    rect7.visible = true
    // text("level 2", 200, 200)
    // rect(100, 700, 150, 30)
    player.collide(rect1)
    player.collide(rect2)
    player.collide(rect3)
    player.collide(rect4)
    player.collide(rect5)
    player.collide(rect6)
    player.collide(rect7)

    movementPlayer()
    text(mouseX + " " + "," + " " + mouseY, mouseX - 26, mouseY - 10);

  }


  drawSprites();
}

function movementPlayer() {

  if (keyDown(LEFT_ARROW)) {
    player.x -= 4
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x += 4
  }
  if (keyDown(DOWN_ARROW)) {
    player.y += 4
  }
  if (keyDown(UP_ARROW)) {
    player.y -= 4
  }

}


// YOUR TASKS
// you have to add multiple rectangles at different positions
// then you have to add image for the player


//if(player.isTouching(rect1)){
 // player.visible=false
// }


























































































