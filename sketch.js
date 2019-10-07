var grid = {};
var gridWidth = 15;
var gridHeight = 10;

function setup() {
    createCanvas(640, 360);

    for (let i = 0; i < gridWidth; i++) {
        grid[i] = {};
        for (let j = 0; j < gridHeight; j++) {
             grid[i][j] = random(0,255);  
        }    
    }
    noLoop();
}

function draw() {
    background(255);
    
    var rectWidth = width/gridWidth;
    var rectHeight = height/gridHeight;

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            let x = i*rectWidth;
            let y = j*rectHeight;
            console.log(x,y);
            stroke(0);
            console.log(grid[i][j]);
            fill(grid[i][j]);
            rect(x,y,rectWidth,rectHeight);
        }   
    }
}

// reset board when mouse is pressed
function mousePressed() {
    console.log('mouse pressed');
}