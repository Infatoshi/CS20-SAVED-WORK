// Graphics Libary

let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Draw a line
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
line(100, 200, 300, 100);


// Draw a Rectangle
ctx.fillStyle = "orange";
rect(100, 100, 200, 50, "fill");
rect(400, 500, 70, 100, "stroke");

// Draw a Circle
circle(400, 300, 50, "stroke");
fill("green"); // Green must be before the function call or it will defualt to orange because it was the last color called
circle(700, 350, 25, "fill");


triangle(500, 200, 300, 400, 100, 250, "stroke");
stroke("red");
triangle(50, 100, 200, 300, 400, 500, "fill");

font("44px Arial");
text("Hello", 400, 200, "stroke");
ctx.fillText("Hello", 400, 200);

// Draw an ellipse


fill("green");
ellipse(700, 100, 10, 80, 0, "fill");

stroke("orange");
lineWidth(2);
ellipse(700, 500, 150, 25, 0, "stroke");

// Draw an image

let = capsImg = document.createElement("img");
capsImgEl.src = "img/black.png";

window.addEventListener("load", draw);

function draw() {

    imageClip(capsImgEl, 100, 100, 476, 476, 0, 0, 100, 200);
    
    }


    

    