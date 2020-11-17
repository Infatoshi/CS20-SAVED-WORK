let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

function drawSnowman (x, y, color) {
    stroke(color);
    circle(10, 10, 30, 30, "stroke"); // Head
    circle(x + 10, y + 40, 40, 40); // Body
    circle(x + 10, y + 90, 50, 50); // Bottom
    line(x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(x, y + 110, x + 20, y + 80); // Left Arm
    line(x + 40, y + 110, x + 20, y + 80); // Left Eye
    circle(); // Right Eye
 


}


drawSnowman(50, 50, "red");
drawSnowman(600, 50, "purple");


