







 //s1: rotate circle around point
let s1 = {
  color: 10,
  translationX: 200,
  translationY: 100,
  posX: 80,
  posY: 80,
  width: 302,
  height: 218,
  speed: 0,
  angle: 0

};




//rect01: rotate circle around point
let rect01 = {
  color: 220,
  translationX: 225,
  translationY: 105,
  posX: 0,
  posY: 0,
  speed: 0,
  angle: 0

};

//let rect01Angle = 0;




// s2: rotate circle around point
let s2 = {
  color: 200,
  translationX: 300,
  translationY: 100,
  posX1: 110,
  posY1: 415,
  posX2: 410,
  posY2: 415,
  posX3: 420,
  posY3: 410,
  posX4: 100,
  posY4: 410,
  speed: 0,
  angle: 0

};


//let s2Angle = 0;




// quad01: move back and forth
let quad01 = {
  color: 'red',
  quadposX: 100,
  quadposY: 400,
  quadposXa: 420,
  quadposYa: 400,
  quadposXb: 518,
  quadposYb: 320,
  quadposXc: 220,
  quadposYc: 320,
  speed: 1.5,
  speeda: 1.5,
  speedb: 1.5,
  speedc: 1.5

};




//let quad01_XPos = 100;
//let quad01_speed = 1.5;

//let quad01a_XPos = 420;
//let quad01a_speed = 1.5;

//let quad01b_XPos = 518;
//let quad01b_speed = 1.5;

//let quad01c_XPos = 220;
//let quad01c_speed = 1.5;




// quad02: rotate rect around point
let quad02 = {
  color: 220,
  translationX: 400,
  translationY: 800,
  posX1: 100,
  posY1: 200,
  speed: 0,
  angle: 0

};

//let quad02Angle = 0;




// quad03: rotate rect around point
let quad03 = {
  color: 220,
  translationX: 200,
  translationY: 100,
  posX1: 100,
  posY1: 100,
  speed: 0,
  angle: 0

};

//let quad03Angle = 0;




// quad04: scale box
// Setting up global variables for quad04
let quad04 = {
  color: 200,
  width: 300,
  Scale: 1,
  widtha: 330,
  Scalea: 1

};

//let quad04_width = 300;
//let quad04_Scale = 1;


//let quad04a_width = 330;
//let quad04a_Scale = 1;

//let box_08_textSize = 10;





// quad05: move in x and y directions
let quad05 = {
  color: 'red',
  quadposX: 438,
  quadposY: 372,
  quadposXa: 490,
  quadposYa: 330,
  quadposXb: 220,
  quadposYb: 330,
  quadposXc: 161,
  quadposYc: 372,
  speedX: 1,
  speedY: 1,
  speedXa: 1,
  speedYa: 1,
  speedXb: 1,
  speedYb: 1,
  speedXc: 1,
  speedYc: 1

};

//let rect05_XPos = 438;
//let rect05_speedX = 1;
//let rect05_YPos = 372;
//let rect05_speedY = 1;
//    X2_Y2
//let rect05a_XPos = 490;
//let rect05a_speedX = 1;
//let rect05a_YPos = 330;
//let rect05a_speedY = 1;
//    X3_Y3
//let rect05b_XPos = 220;
//let rect05b_speedX = 1;
//let rect05b_YPos = 330;
//let rect05b_speedY = 1;
//    X4_Y4
//let rect05c_XPos = 161;
//let rect05c_speedX = 1;
//let rect05c_YPos = 372;
//let rect05c_speedY = 1;




// let shapesArray = [quad01, s1, quad02, rect01, quad03, s2];



//CODE START
  function setup() {
    createCanvas(600, 600);
    // song = loadSound("rainbow.mp3");
    // slider = createSlider(0, 1, 0.5, 0.01);
    // song.play();
  }

// function loaded() {
//   song.play();
// }

  function draw() {
    background(220);
      background(220);
      // song.setVolume(slider.value());





// shapeManipulation(shapesArray[0]);
// shapeManipulation(shapesArray[1]);
// shapeManipulation(shapesArray[2]);
// shapeManipulation(shapesArray[3]);
// shapeManipulation(shapesArray[4]);
// shapeManipulation(shapesArray[5]);




    //s1
    //laptop screen
    rotates1();
//   fill(s1.color);
//    push();
//    translate(s1.translationX, s1.translationY);
//    rotate(s1.angle);
//    rect(s1.posX, s1.posY, s1.width, s1.height);
//    pop();
//
// s1.angle = s1.angle + 1;



  //back of laptop screen
fill(40)
rect(220, 100, 300, 220, 5);




  //rect01
  rotateRect01();
// fill(rect01.color)
// push();
// translate(rect01.translationX, rect01.translationY);
// rotate(rect01.angle);
// rect(rect01.posX, rect01.posY, 290, 200);
// pop();
//
//
// rect01.angle = rect01.angle + 1;




   //s2
   //laptop base
   rotates2();
//   fill(s2.color);
//    push();
//    translate(s2.translationX, s2.translationY);
//    rotate(s2.angle);
//    quad(s2.posX1, s2.posY1, s2.posX2, s2.posY2, s2.posX3, s2.posY3, s2.posX4, s2.posY4);
//    pop();
//
// s2.angle++;




//base top
fill(240)
quad(110, 415, 410, 415, 518, 320, 220, 320);

//base bottom
fill(200)
quad(100, 410, 420, 410, 516, 330, 220, 320);




   //quad01
   //top base
   moveQuad01(quad01);
  // fill(quad01.color);
  //
  // if (quad01.quadposX > 100 || quad01.quadposX < 0) {
  //   quad01.speed = quad01.speed*-1;
  // }
  // quad01.quadposX = quad01.quadposX + quad01.speed;
  //
  //
  // if (quad01.quadposXa > 420 || quad01.quadposXa < 320) {
  //   quad01.speeda = quad01.speeda*-1;
  // }
  // quad01.quadposXa = quad01.quadposXa + quad01.speeda;
  //
  //
  // if (quad01.quadposXb > 518 || quad01.quadposXb < 418) {
  //   quad01.speedb = quad01.speedb*-1;
  // }
  // quad01.quadposXb = quad01.quadposXb + quad01.speedb;
  //
  //
  // if (quad01.quadposXc > 220 || quad01.quadposXc < 120) {
  //   quad01.speedc = quad01.speedc*-1;
  // }
  // quad01.quadposXc = quad01.quadposXc + quad01.speedc;
  //
  //
  //   quad(quad01.quadposX, 400, quad01.quadposXa, 400, quad01.quadposXb, 320, quad01.quadposXc, 320);




   //quad02
   //front base
   rotateQuad(quad02);
//    fill(quad02.color);
//    push();
//    translate(quad02.translationX, quad02.translationY);
//    rotate(quad02.angle);
//    rect(quad02.posX1, quad02.posY1, 320, 10);
//    pop();
//
//
// quad02.angle++;




   //quad03
   //side base
   rotateQuad(quad03)
 //  fill(quad03.color);
 //    push();
 //    translate(quad03.translationX, quad03.translationY);
 //    rotate(quad03.angle);
 //    //quad(420, 410, 420, 400, 518, 320, 518, 330);
 //    rect(quad03.posX1, quad03.posY1, 320, 10);
 //    pop();
 //
 //
 // quad03.angle++;




   //quad04
   //mouse pad
   scaleQuad(quad04);
  // fill(quad04.color)
  //   //quad(220, 395, 300, 395, 330, 375, 250, 375);
  //
  // if (quad04.width > 570 || quad04.width < 300) {
  //   quad04.Scale = quad04.Scale*-1;
  // }
  // quad04.width = quad04.width + quad04.Scale;
  //
  // if (quad04.widtha > 600 || quad04.widtha < 330) {
  //   quad04.Scalea = quad04.Scalea*-1;
  // }
  // quad04.widtha = quad04.widtha + quad04.Scalea;
  //
  //   quad(220, 395, quad04.width, 395, quad04.widtha, 375, 250, 375);




   //quad05
   //keyboard
   moveQuad(quad05);
//   fill(quad05.color)
// //quad(438, 372, 490, 330, 220, 330, 161, 372);
//
// //X1_Y1
//   if (quad05.quadposX > 500 || quad05.quadposX < 0) {
//     quad05.speedX = quad05.speedX*-1;
//   }
//   quad05.quadposX = quad05.quadposX + quad05.speedX;
//
//   if (quad05.quadposY > 500 || quad05.quadposY < 0) {
//     quad05.speedY = quad05.speedY*-1;
//   }
//   quad05.quadposY = quad05.quadposY + quad05.speedY;
//
// //X2_Y2
//   if (quad05.quadposXa > 500 || quad05.quadposXa < 0) {
//     quad05.speedXa = quad05.speedXa*-1;
//   }
//   quad05.quadposXa = quad05.quadposXa + quad05.speedXa;
//
//   if (quad05.quadposYa > 500 || quad05.quadposYa < 0) {
//     quad05.speedYa = quad05.speedYa*-1;
//   }
//   quad05.quadposYa = quad05.quadposYa + quad05.speedYa;
//
// //X3_Y3
//   if (quad05.quadposXb > 500 || quad05.quadposXb < 0) {
//     quad05.speedXb = quad05.speedXb*-1;
//   }
//   quad05.quadposXb = quad05.quadposXb + quad05.speedXb;
//
//   if (quad05.quadposYb > 500 || quad05.quadposYb < 0) {
//     quad05.speedYb = quad05.speedYb*-1;
//   }
//   quad05.quadposYb = quad05.quadposYb + quad05.speedYb;
//
// //X4_Y4
//   if (quad05.quadposXc > 500 || quad05.quadposXc < 0) {
//     quad05.speedXc = quad05.speedXc*-1;
//   }
//   quad05.quadposXc = quad05.quadposXc + quad05.speedXc;
//
//   if (quad05.quadposYc > 500 || quad05.quadposYc < 0) {
//     quad05.speedYc = quad05.speedYc*-1;
//   }
//   quad05.quadposYc = quad05.quadposYc + quad05.speedYc;
//
//     quad(quad05.quadposX, quad05.quadposY, quad05.quadposXa, quad05.quadposYa, quad05.quadposXb, quad05.quadposYb, quad05.quadposXc, quad05.quadposYc);

}


function rotates1() {
  fill(s1.color);
   push();
   translate(s1.translationX, s1.translationY);
   rotate(s1.angle);
   rect(s1.posX, s1.posY, s1.width, s1.height);
   pop();

s1.angle = s1.angle + 1;
}




function rotateRect01() {
  fill(rect01.color)
  push();
  translate(rect01.translationX, rect01.translationY);
  rotate(rect01.angle);
  rect(rect01.posX, rect01.posY, 290, 200);
  pop();

  rect01.angle = rect01.angle + 1;
}




function rotates2() {
  fill(s2.color);
   push();
   translate(s2.translationX, s2.translationY);
   rotate(s2.angle);
   quad(s2.posX1, s2.posY1, s2.posX2, s2.posY2, s2.posX3, s2.posY3, s2.posX4, s2.posY4);
   pop();

s2.angle++;
}




function moveQuad01(incomingGeometry) {
  fill(incomingGeometry.color);

  if (incomingGeometry.quadposX > 100 || incomingGeometry.quadposX < 0) {
    incomingGeometry.speed = incomingGeometry.speed*-1;
  }
  incomingGeometry.quadposX = incomingGeometry.quadposX + incomingGeometry.speed;


  if (incomingGeometry.quadposXa > 420 || incomingGeometry.quadposXa < 320) {
    incomingGeometry.speeda = incomingGeometry.speeda*-1;
  }
  incomingGeometry.quadposXa = incomingGeometry.quadposXa + incomingGeometry.speeda;


  if (incomingGeometry.quadposXb > 518 || incomingGeometry.quadposXb < 418) {
    incomingGeometry.speedb = incomingGeometry.speedb*-1;
  }
  incomingGeometry.quadposXb = incomingGeometry.quadposXb + incomingGeometry.speedb;


  if (incomingGeometry.quadposXc > 220 || incomingGeometry.quadposXc < 120) {
    incomingGeometry.speedc = incomingGeometry.speedc*-1;
  }
  incomingGeometry.quadposXc = incomingGeometry.quadposXc + incomingGeometry.speedc;


    quad(incomingGeometry.quadposX, 400, incomingGeometry.quadposXa, 400, incomingGeometry.quadposXb, 320, incomingGeometry.quadposXc, 320);
}




function rotateQuad(incomingGeometry) {
  fill(incomingGeometry.color);
  push();
  translate(incomingGeometry.translationX, incomingGeometry.translationY);
  rotate(incomingGeometry.angle);
  rect(incomingGeometry.posX1, incomingGeometry.posY1, 320, 10);
  pop();


incomingGeometry.angle++;
}




function rotateQuad(incomingGeometry) {
  fill(incomingGeometry.color);
    push();
    translate(incomingGeometry.translationX, incomingGeometry.translationY);
    rotate(incomingGeometry.angle);
    //quad(420, 410, 420, 400, 518, 320, 518, 330);
    rect(incomingGeometry.posX1, incomingGeometry.posY1, 320, 10);
    pop();


 incomingGeometry.angle++;
}




function scaleQuad(incomingGeometry) {
  fill(incomingGeometry.color)
    //quad(220, 395, 300, 395, 330, 375, 250, 375);

  if (incomingGeometry.width > 570 || incomingGeometry.width < 300) {
    incomingGeometry.Scale = incomingGeometry.Scale*-1;
  }
  incomingGeometry.width = incomingGeometry.width + incomingGeometry.Scale;

  if (incomingGeometry.widtha > 600 || incomingGeometry.widtha < 330) {
    incomingGeometry.Scalea = incomingGeometry.Scalea*-1;
  }
  incomingGeometry.widtha = incomingGeometry.widtha + incomingGeometry.Scalea;

    quad(220, 395, incomingGeometry.width, 395, incomingGeometry.widtha, 375, 250, 375);
}




function moveQuad(incomingGeometry) {
  fill(incomingGeometry.color)
//quad(438, 372, 490, 330, 220, 330, 161, 372);

//X1_Y1
  if (incomingGeometry.quadposX > 500 || incomingGeometry.quadposX < 0) {
    incomingGeometry.speedX = incomingGeometry.speedX*-1;
  }
  incomingGeometry.quadposX = incomingGeometry.quadposX + incomingGeometry.speedX;

  if (incomingGeometry.quadposY > 500 || incomingGeometry.quadposY < 0) {
    incomingGeometry.speedY = incomingGeometry.speedY*-1;
  }
  incomingGeometry.quadposY = incomingGeometry.quadposY + incomingGeometry.speedY;

//X2_Y2
  if (incomingGeometry.quadposXa > 500 || incomingGeometry.quadposXa < 0) {
    incomingGeometry.speedXa = incomingGeometry.speedXa*-1;
  }
  incomingGeometry.quadposXa = incomingGeometry.quadposXa + incomingGeometry.speedXa;

  if (incomingGeometry.quadposYa > 500 || incomingGeometry.quadposYa < 0) {
    incomingGeometry.speedYa = incomingGeometry.speedYa*-1;
  }
  incomingGeometry.quadposYa = incomingGeometry.quadposYa + incomingGeometry.speedYa;

//X3_Y3
  if (incomingGeometry.quadposXb > 500 || incomingGeometry.quadposXb < 0) {
    incomingGeometry.speedXb = incomingGeometry.speedXb*-1;
  }
  incomingGeometry.quadposXb = incomingGeometry.quadposXb + incomingGeometry.speedXb;

  if (incomingGeometry.quadposYb > 500 || incomingGeometry.quadposYb < 0) {
    incomingGeometry.speedYb = incomingGeometry.speedYb*-1;
  }
  incomingGeometry.quadposYb = incomingGeometry.quadposYb + incomingGeometry.speedYb;

//X4_Y4
  if (incomingGeometry.quadposXc > 500 || incomingGeometry.quadposXc < 0) {
    incomingGeometry.speedXc = incomingGeometry.speedXc*-1;
  }
  incomingGeometry.quadposXc = incomingGeometry.quadposXc + incomingGeometry.speedXc;

  if (incomingGeometry.quadposYc > 500 || incomingGeometry.quadposYc < 0) {
    incomingGeometry.speedYc = incomingGeometry.speedYc*-1;
  }
  incomingGeometry.quadposYc = incomingGeometry.quadposYc + incomingGeometry.speedYc;

    quad(incomingGeometry.quadposX, incomingGeometry.quadposY, incomingGeometry.quadposXa, incomingGeometry.quadposYa, incomingGeometry.quadposXb, incomingGeometry.quadposYb, incomingGeometry.quadposXc, incomingGeometry.quadposYc);
}
