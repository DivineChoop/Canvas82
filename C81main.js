var mouseevent = "empty"
var lastposofx, lastposofy

canvas = document.getElementById("can1");
ctx = canvas.getContext("2d");

var color = "black";
var widthofline = "1";

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    mouseevent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseevent = "mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseUp)
function my_mouseUp(e) {
    mouseevent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mouseMove)
function my_mouseMove(e) {
    currentposofmousex = e.clientX - canvas.offsetLeft;
    currentposofmousey = e.clientY - canvas.offsetTop;
    if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log("lastposofx and y coordinates= ");
        console.log("x = " + lastposofx + "y = " + lastposofy);
        ctx.moveTo(lastposofx, lastposofy);
        console.log("currentposofmousex and y coordinates= ");
        console.log("x = " + currentposofmousex + "y = " + currentposofmousey);
        ctx.lineTo(currentposofmousex, currentposofmousey);
        ctx.stroke();
    }
    lastposofx = currentposofmousex;
    lastposofy = currentposofmousey;
}