
//a two dimensional array to hold the states of all cells
var grid;

//a grid representing the next generation
var newGrid;

//number of cells in the x and y direction
var gridWidth = 200;
var gridHeight = 160;

//the width and high of a cell when its drawn as a rectangle
var rectWidth;
var rectHeight;

//ignore first and last cells
//make ruleset function
function setup () {
    createCanvas(800, 600);

    //calculate the width and height of rectangles based on the canvas width and height
    rectWidth = width / gridWidth;
    rectHeight = height / gridHeight;

    //create a two dimensional array
    grid = new Array(gridWidth);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(gridHeight);
    }

    //initialize the grid cells with 0
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            grid[i][j] = 0;
        }
    }
    console.log(grid);

    noLoop();
}

function draw () {
    background(255);

    //draw the the grid 
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            let x = i * rectWidth;
            let y = j * rectHeight;
            var cellState = grid[i][j];
            //stroke(0);
            noStroke();
            if (cellState == 0) {
                fill('white');
            }
            else if (cellState == 1) {
                fill('black');
            }
            rect(x, y, rectWidth, rectHeight);
        }
    }
}

// mouse press to change the value of a grid cell
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

//calculate the next generation of the grid when a key is typed
function keyTyped () {
    updateGrid();
    redraw();
}

function updateGrid () {
    //create a two dimensional array for calculating the next generation
    //create a two dimensional array
    var nextGen = new Array(gridWidth);
    for (var i = 0; i < nextGen.length; i++) {
        nextGen[i] = new Array(gridHeight);
    }

    //calculate the new states for each grid cell
    //omit border cells to keep code simple
    for(var i=1; i<gridWidth-1; i++){
        for(var j=1; j<gridHeight-1; j++){
            //get the states of the neigbouring cells
            var topLeft = grid[i-1][j-1];
            var top = grid[i][j-1];
            var topRight = grid[i+1][j-1];
            var left = grid[i-1][j];
            var right = grid[i+1][j];
            var bottomLeft = grid[i-1][j+1];
            var bottom = grid[i][j+1];
            var bottomRight = grid[i+1][j+1];
        }
    }

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

