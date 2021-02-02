// Constants for main ghost body
var HEAD_RADIUS = 70;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 120;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
var BODY_COLOR = Color.red;

// Constants for eyes
var PUPIL_RADIUS = 8;
var PUPIL_LEFT_OFFSET = 16;
var PUPIL_RIGHT_OFFSET = 40;
var EYE_RADIUS = 20;
var EYE_OFFSET = 28;
var EYE_COLOR = Color.white;
var PUPIL_COLOR = Color.blue;

/* This program draws a ghost on the canvas. */
    var centerX = getWidth() / 2;
    var centerY = getHeight() / 2;


function start(){
    
    drawCircle(centerX,centerY,HEAD_RADIUS,Color.red);
    drawBody(centerX,centerY,Color.red);
    drawEyes(centerX - EYE_OFFSET,centerY,EYE_RADIUS,Color.white);
    drawEyes(centerY,centerY,EYE_RADIUS,Color.white);
    drawFeet(centerX,centerY+BODY_HEIGHT,FOOT_RADIUS,Color.red);
    drawFeet(centerX-FOOT_RADIUS*2,centerY+BODY_HEIGHT,FOOT_RADIUS,Color.red);
    drawFeet(centerX+FOOT_RADIUS*2,centerY+BODY_HEIGHT,FOOT_RADIUS,Color.red);

}


    // this function adds a head. */
function drawCircle(x, y, radius, color){
    
    var head = new Circle(radius);
    head.setPosition(x,y);
    head.setColor(color);
    add(head);


}
    // this function adds a body.*/
function drawBody(width, heigth, color){
    var body = new Rectangle(BODY_WIDTH,BODY_HEIGHT );
    body.setPosition(width - HEAD_RADIUS, heigth);
    body.setColor(color);
    add(body);
}
    // this function adds a eyes.*/
function drawEyes(x, y, radius, color){
    drawCircle(x,y,radius,color);
    drawCircle(x + PUPIL_LEFT_OFFSET,y,PUPIL_RADIUS,Color.blue);
    
}
    // this function adds feet.*/
function drawFeet(x,y,radius,color){
    NUM_FEET = 3;
    drawCircle(x,y, radius, color);
    
}