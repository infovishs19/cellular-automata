var grid;
var newGrid;
var gridWidth = 200;
var gridHeight = 160;
var rectWidth;
var rectHeight;
function setup () {
    createCanvas(800, 600);
    rectWidth = width / gridWidth;
    rectHeight = height / gridHeight;
    grid = create2DArray(gridWidth, gridHeight);
    console.log(grid);

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
            //stroke(0);
            noStroke();
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
    let xindex = floor(mouseX / rectWidth);
    let yindex = floor(mouseY / rectHeight);
    console.log(xindex, yindex);
    if (grid[xindex][yindex] == 0) {
        grid[xindex][yindex] = 1;
    }
    else {
        grid[xindex][yindex] = 0;
    }
    redraw();
}

function keyTyped () {
    updateGrid();
    redraw();
}

function updateGrid () {
    newGrid = create2DArray(gridWidth, gridHeight);

    console.log('updateGrid');
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            updateCell(i, j);
        }
    }
    grid = newGrid;
}

function updateCell (xindex, yindex) {

    if (grid[xindex][yindex] == 0) {
        return;
    }
    // if(grid[xindex][yindex] == 1){
    //     newGrid[xindex][yindex] == 1;
    // }
    //here we know that grid[xindex][yindex] == 1
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            var x = xindex + i;
            var y = yindex + j;
            if (x < 0 || x >= gridWidth || y < 0 || y >= gridHeight) {
                continue;
            }
            //rules
            //upper left
            if (i == -1 && j == -1) {
                if (random(0, 1) > 0) {
                    newGrid[x][y] = 1;
                }
            }
            //upper
            if (i == 0 && j == -1) {
                if (random(0, 1) > 1) {
                    newGrid[x][y] = 1;
                }
            }
            //upper right
            if (i == 1 && j == -1) {
                if (random(0, 1) > 0) {
                    newGrid[x][y] = 1;
                }
            }
            //left
            if (i == -1 && j == 0) {
                if (random(0, 1) > 1) {
                    newGrid[x][y] = 1;
                }
            }
            //center
            if (i == 0 && j == 0) {
                
                    newGrid[x][y] = 1;
                
            }
            //right
            if (i == 1 && j == 0) {
                if (random(0, 1) > 1) {
                    newGrid[x][y] = 1;
                }
            }
            //lower left
            if (i == -1 && j == 1) {
                if (random(0, 1) > 0) {
                    newGrid[x][y] = 1;
                }
            }
            //lower
            if (i == 0 && j == 1) {
                if (random(0, 1) > 1) {
                    newGrid[x][y] = 1;
                }
            }
            //lower right
            if (i == 1 && j == 1) {
                if (random(0, 1) > 0.9) {
                    newGrid[x][y] = 1;
                }
            }

        }
    }
}

function create2DArray (w, h) {
    var arr = new Array(w);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(h);
    }
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}