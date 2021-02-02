var height = 0;
var width = 0;
var positionX = 0;
var positionY = 0;
var ask = 0;
var color = Color.red;
function start(){

    ask = readLine("what you need drawing?");
    positionX = readInt("what your position X ?");
    positionY = readInt("what your position Y ?");
    color = readLine("what color you need ?");
    if (color == "yellow"){
        color = Color.yellow;
    }
    if (color == "red"){
        color = Color.red;
    }
    if(color == "blue"){
       color = Color.blue;
    }
    height = readInt("what is your height ?");
    width = readInt("what is your width ?");
    
    
    if (ask == 1){
        drawrect(positionX,positionY,height,width,color);
    }
    
    
}


function drawrect(x,y,height,width,color){
    
    var rect = new Rectangle(height,width);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    
}

function drawcircle(x,y,radius,color){
    
    var circle = new circle(radius);
    circle.setPosition(x,y);
    circle.setColor(color);
    add(circle);
}

function drawoval(x,y,height,width,color){
    
    var oval = new Oval(height,width);
    oval.setPosition(x,y);
    oval.setColor(color);
    add(oval);
}