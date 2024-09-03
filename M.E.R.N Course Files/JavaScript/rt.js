var start = new Date().getTime();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} // StackOverflow
function move() { // randomness to the block and position 
    var left;
    var top;
    var wh;
    left = Math.random() * 300; // Positioning left padding
    right = Math.random() * 300; // Positioning right padding
    wh = ((Math.random() * 400) + 100); // heigh weight 0 Widht so 100 plus
    document.getElementById("shape").style.left = left; // adding some margin on left side
    document.getElementById("shape").style.top = top;
    document.getElementById("shape").style.width = wh;
    document.getElementById("shape").style.height = wh;
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    start = new Date().getTime(); // timer started
}
move();;
document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert(timeTaken);
    move();
}
