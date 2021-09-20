var bubble;
var lana,lana1;
var bgimage;
var gameState = 1;
var button1, greeting, input;
var inp1;
var number;
var button4;
var button5;
var yes=0, no=0;
var yes2, no2;
function preload()
{
	bgimage = loadImage("bg5.jpg");
  lana = loadImage("robot.jpg");
  bubble = loadImage("box.png");
  border = loadImage("border.png");
}

function setup() {

	createCanvas(1024,768);
  //creating the login /register form 
  //display input box 
  input = createInput();
  input.hide();
//create all buttons required in-game
  button1 = createButton('Submit');
  button1.hide();

  button2 = createButton('Next');
  button2.hide();

  button3 = createButton('Next');
  button3.hide();
  
  button4 = createButton('Next');
  button4.hide();

  button5 = createButton('Yes');
  button5.hide();

  button6 = createButton('No');
  button6.hide();

  yes2 = createButton('Yes');
  yes2.hide();

  no2 = createButton('No');
  no2.hide();

  next2 = createButton('Next');
  next2.hide();

  yes3 = createButton('Yes');
  yes3.hide();

  no3 = createButton('No');
  no3.hide();

  next3 = createButton('Next');
  next3.hide();

  yes4 = createButton('Yes');
  yes4.hide();

  no4 = createButton('No');
  no4.hide();

  next4 = createButton('Next');
  next4.hide();


  greeting = createElement('h2', 'What is your name?');
  greeting.hide();
 
  greetPlayer=createElement('h3');
  greetPlayer.hide();
  

}


function draw() {
  //background color
  
  background('white');
  //code of 1st state
 if(gameState === 1)
 {
  
   imageMode (CENTER);
   image(border,512,384);
   
   image (bgimage,900,70,100,50);
   image (lana,190,370,110,300);
   image (bubble,400,150,700,200);
   
   input.show();
    input.position(365, 600);
    inp1=input.value();

    button1.show();
    button1.position(input.x + input.width, 600);
    
    greeting.show();
    greeting.position(360, 550);
      
    fill(255, 153, 0);
    textSize(25);
    textFont('Georgia');
    text('Hi! Im Lana!', 300, 105);
    fill(255, 153, 0);
    textSize(25);
    textFont('Georgia');
    text(' Ill be leading you on your journey of eye testing!', 110, 140);
  
    fill(255, 153, 0);
    textSize(25);
    textFont('Georgia');
    text('Please enter your username so we know what to call you.', 90, 175);
  

    button1.mousePressed(()=>{
       gameState=2;
    })
  }
//2nd state code
  if(gameState === 2){
    
    imageMode (CENTER);
    image(border,512,384);
    image (bgimage,900,70,100,50);
    background('yellow');
    input.hide();
    button1.hide();
    greeting.hide();
    button2.show();
    button2.position(250,565);
    greetPlayer.show();
    greetPlayer.style('font-size','40px');
    //for greeting with the entered name
    greetPlayer.html("   Hello   " + inp1 + "  ,  ");
    greetPlayer.position(200,100);


  textSize(20);
  fill(23, 106, 207);
  text('Kindly follow the instructions further:',200,210);
  text('1. Please read the instructions for the patient',200,250);
  text('2. Please stand as per the distance required, away from your phone',200,300);
  text('3. Make sure to be present in a well lit room',200,350);
  text('4. Answer all the questions in the next step',200,400);
  
  button2.mousePressed(()=>{
    gameState=3;
 
  })
}//3rd state code
  if(gameState===3){
    imageMode (CENTER);
    image(border,512,384);
    image (bgimage,900,70,100,50);
  greetPlayer.hide(); 
  button2.hide();
  button3.hide();
  button4.show();
  button4.position(280,585);
  button4.size(100,50);
  button5.show();
  button5.position(340,525);
  button5.size(100,50);
  var col = color(100,100,200,200)
  button5.style('background-color', col);
  button6.show();
  button6.size(100,50);
  button6.position(220,525);
  var col = color(100,100,200,200)
  button6.style('background-color', col);
  fill('white');
  rect(150,270,400,200);
  
  fill(255,153,0);
  textSize(35);
  text('Please stand 3 metres away',120,200);
  
  fill(0,0,0);
  textSize(100);
  text('F      P',200,400);

  fill(0,0,0);
  textSize(20);
  text('Can you see the letters in the box?',200,500);
 
  button5.mousePressed(()=>{
    yes+=1
    console.log(yes);
    // Disable the button
    button5.attribute('disabled', '');
    button6.attribute('disabled', '');
  })
 
  button6.mousePressed(()=>{
    no+=1
    console.log(no);
    button6.attribute('disabled', '');
    button5.attribute('disabled', '');
  })
  
  button4.mousePressed(()=>{
    gameState=4;
  })
  }
 
  if(gameState === 4){
    //code of 4th state
    imageMode (CENTER);
    image(border,512,384);
    image (bgimage,900,70,100,50);
    button4.hide();
    button5.hide();
    button6.hide();
    next2.show();
    next2.size(80,50);
    next2.position(340,585);
    var col = color(100,100,200,200);
    yes2.show();
    yes2.position(380,525);
    yes2.style('background-color',col);
    yes2.size(100,50);
    no2.show();
    no2.position(270,525);
    no2.style('background-color',col);
    no2.size(100,50);
  
    fill(255,153,0);
    textSize(35);
    text('Please stand 5 metres away',170,200);
    
    fill('white');
    rect(185,270,400,200);
    
    fill(0,0,0);
    textSize(20);
    text('Can you see the letters in the box?',230,500);

    fill(0,0,0);
    textSize(70);
    text('T      O      Z',200,400);

    yes2.mousePressed(()=>{
      yes+=1
      console.log(yes)
      yes2.attribute('disabled', '');
      no2.attribute('disabled', '');
    })
    no2.mousePressed(()=>{
      no+=1
      console.log(no);
      no2.attribute('disabled', '');
      yes2.attribute('disabled', '');
    })
      next2.mousePressed(()=>{
        gameState=5
      })
    }

    if(gameState === 5){
      imageMode (CENTER);
      image(border,512,384);
      image (bgimage,900,70,100,50);
    next2.hide();
    yes2.hide();
    no2.hide();
    yes3.show();
    no3.show();
    next3.show();
    var col = color(100,100,200,200);

    yes3.position(380,525);
    yes3.size(100,50);
    yes3.style('background-color',col);

    no3.position(270,525);
    no3.size(100,50);
    no3.style('background-color',col);

    next3.position(330,585);
    next3.size(80,50);

    fill('white');
    rect(190,270,400,200);

    fill(0,0,0);
    textSize(50);
    text('L     P      E      D',200,400)
    
    fill(255,153,0);
    textSize(35);
    text('Please stand 7 metres away',170,200);

    yes3.mousePressed(()=>{
      yes+=1
      console.log(yes)
      yes3.attribute('disabled', '');
      no3.attribute('disabled', '');
    })
    no3.mousePressed(()=>{
      no+=1
      console.log(no);
      no3.attribute('disabled', '');
      yes3.attribute('disabled', '');
    })
    next3.mousePressed(()=>{
      gameState = 6;
    })
  }

  if(gameState === 6){
   
    imageMode (CENTER);
    image(border,512,384);
    image (bgimage,900,70,100,50);
    yes3.hide();
    no3.hide();
    next3.hide();
    yes4.show();
    no4.show();
    next4.show();
   
    var col = color(100,100,200,200);

    yes4.position(380,525);
    yes4.size(100,50);
    yes4.style('background-color',col);

    no4.position(270,525);
    no4.size(100,50);
    no4.style('background-color',col);

    next4.position(330,585);
    next4.size(80,50);

    fill('white');
    rect(190,270,400,200);

    fill(0,0,0);
    textSize(40);
    text('P  C  E  F  D',280,380);

    next3.position(330,585);
    next3.size(80,50);

    fill(255,153,0);
    textSize(35);
    text('Please stand 9 metres away',170,200);
    
    yes4.mousePressed(()=>{
      yes+=1
      console.log(yes)
      yes4.attribute('disabled', '');
      no4.attribute('disabled', '');
    })
    no4.mousePressed(()=>{
      no+=1
      console.log(no);
      yes4.attribute('disabled', '');
      no4.attribute('disabled', '');
    })
    next4.mousePressed(()=>{
      gameState = 7;
    })

  }

  if(gameState === 7){
    
    imageMode (CENTER);
    image(border,512,384);
    image (bgimage,900,70,100,50);
    image (lana,220,430,110,300);
    image (bubble,450,200,700,200);
    background('yellow')
    next4.hide();
    no4.hide();
    yes4.hide();

    var col = color(100,100,200,200);
    fill(0,0,0);
    textSize(29);
    text('You have completed the test.',150,180);
    text("Your score is " + yes + " out of 4",150,220)

    if(yes == 1){
      fill(240, 34, 19);
      textSize(30)
      text('Please consult a Doctor and reduce screen exposure!',150,370)
    }
   else if(yes == 2){
    fill(240, 34, 19);
      textSize(30)
      text('Please consult a Doctor and eat healthy!',150,370)
    }
   else if(yes == 3){
      textSize(30)
      fill(240, 34, 19);
      text('Please take good care.',150,370)
    }
   else if(yes == 4){
      textSize(30)
      fill(240, 34, 19);
      text('Congratulations! You have great Eye Sight.',150,370)
    }
   
  }

  drawSprites();
 }