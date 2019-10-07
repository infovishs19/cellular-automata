var grid;
var gridWidth = 15;
var gridHeight = 10;
var rectWidth;
var rectHeight;
function setup () {
    createCanvas(640, 360);
    rectWidth = width / gridWidth;
    rectHeight = height / gridHeight;
    grid = create2DArray(gridWidth, gridHeight);
    console.log(grid);
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            grid[i][j] = 0;
        }
    }
    noLoop();
}

function draw () {
    background(255);

    //zweidimensionales array zeichnen
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            let x = i * rectWidth;
            let y = j * rectHeight;
            var val = grid[i][j];
            stroke(0);

            if (val == 0) {
                fill('white');
            }
            else {
                fill('black');
            }

            rect(x, y, rectWidth, rectHeight);
        }
    }
}

// reset board when mouse is pressed
function mousePressed () {
    console.log('mouse pressed');
    let xindex = floor(mouseX/rectWidth);
    let yindex = floor(mouseY/rectHeight);
    console.log(xindex,yindex);
    if(grid[xindex][yindex] == 0){
        grid[xindex][yindex] = 1; 
    }
    else{
        grid[xindex][yindex] = 0;
    }
    redraw();
}

function keyTyped () {
    updateGrid();
}

function updateGrid () {
    console.log('updateGrid');
}

function create2DArray (w, h) {
    var arr = new Array(w);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(h);
    }
    return arr;
}