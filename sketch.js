//Alden Ryan.A.J
var gameState = 0;
var test;
var moving = false;
var gameState = 0;
var tileSize;
var movingPiece;
var whitesMove = true;
var moveCounter = 10;
var images = [];
var whiteAI = false;
var blackAI = true;
var Name = this.input;
var depthPara;
var depthPlus;
var depthMinus;
var player;
var tempMaxDepth = 3;
function preload(){
  bg = loadImage("assets/BG.png")
  bg1 = loadImage("assets/BG11.png")
}
function setup() {
  tileSize = windowWidth/17.88235294117647
  if (gameState === 0){
    bg = loadImage("assets/BG.png")
    login = new Login()
    login.display()
    
  }
  
 

 
  htmlStuff();
  createCanvas(windowWidth, windowHeight)
  
  for (var i = 1; i < 10; i++) {
    images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_0" + i + ".png"));
  }
  for (var i = 10; i < 13; i++) {
    images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_" + i + ".png"));
  }
  test = new Board();
}


function draw() {
   background(bg);
   if(gameState === 0){
    Instruction = createButton("Instructions")
    Instruction.position(windowWidth/2-20,windowHeight/4+50)
    Instruction.mousePressed(()=>{
      window.open("https://aldenryan06.github.io/Rules/")
     
    })
   }
if(gameState === 1){
  background(bg1);
  
  showGrid();
  test.show();
   runAIs();
Instruction.hide()
}
if(gameState === 0){
 
  textSize(windowWidth/75.5)
  fill("white")
  text("Hello"+  " Welcome to AI chess by Alden Ryan", windowWidth/2-150,windowHeight-400)
  text("the more the difficulty the tougher the AI plays", windowWidth/2-150, windowHeight-350)
  fill("white")
}
  if(gameState == 1){
fill("white")
textSize(windowWidth/75.5)
  text(" RECOMENDED DIFFICULTY", windowWidth/2-10, windowHeight-550)
  fill("white")
  text("Begginer = 1", windowWidth/2, windowHeight-480)
  fill("white")
  text("Intermediate = 2-3", windowWidth/2, windowHeight-430)
  fill("white")
  text("Good Player = 4", windowWidth/2 ,windowHeight-380)
  textSize(windowWidth/55)
  fill("gold")
  text("Hello "+player+" Welcome to Cheesy Chess",windowWidth/2,windowHeight-650)
fill("white")

text("DIFFICULTY ADJUSTMENT(USE + / -) down????", windowWidth/2, windowHeight-300)

  }



}

function runAIs() {
  maxDepth = tempMaxDepth;
  if (!test.isDead() && !test.hasWon()) {
    if (blackAI) {
      if (!whitesMove) {
        if (moveCounter < 0) {
          test = maxFunAB(test, -400, 400, 0);
          // test = maxFun(test, 0);
          print(test);
          whitesMove = true;
          moveCounter = 10;
        } else {
          moveCounter--;
        }
      }
    }
    if (whiteAI) {
      if (whitesMove) {
        if (moveCounter < 0) {
          test = minFunAB(test, -400, 400, 0);
          // test = minFun(test, 0);

          print("test", test);

          whitesMove = false;
          moveCounter = 10;
        } else {
          moveCounter--;
        }
      }
    }
  }
}

function showGrid() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if ((i + j) % 2 == 1) {
        fill(0);
      } else {
        fill(240);
      }
      noStroke();
      rect(i * tileSize, j * tileSize, tileSize, tileSize);

    }
  }


}

function keyPressed() {

}

function mousePressed() {
  var x = floor(mouseX / tileSize);
  var y = floor(mouseY / tileSize);
  if (!test.isDone()) {
    if (!moving) {
      movingPiece = test.getPieceAt(x, y);
      if (movingPiece != null && movingPiece.white == whitesMove) {

        movingPiece.movingThisPiece = true;
      } else {
        return;
      }
    } else {
      if (movingPiece.canMove(x, y, test)) {
        movingPiece.move(x, y, test);
        movingPiece.movingThisPiece = false;
        whitesMove = !whitesMove;
      } else {
        movingPiece.movingThisPiece = false;

      }
    }
    moving = !moving;
  }
}

function htmlStuff() {
  createP(
    ""
  )
  
  depthPara = createDiv("Difficulty = " + maxDepth );
  depthPara.position(windowWidth/2+100,windowHeight-250)
  Minus = createButton("-");
  
  Plus = createButton('+');
  Plus.position(windowWidth*0.7236842105263158,windowHeight-250)
  Minus.position(windowWidth*0.75,windowHeight-250)

  Plus.mousePressed(plusDepth);
  Minus.mousePressed(minusDepth);
  

}

function minusDepth() {
  if (tempMaxDepth > 1) {
    tempMaxDepth -= 1;
    depthPara.html("Difficulty =  " + tempMaxDepth);
  }
}

function plusDepth() {
  if (tempMaxDepth < 4) {
    tempMaxDepth += 1;
    depthPara.html("Difficulty =  " + tempMaxDepth);
  }
}

  

