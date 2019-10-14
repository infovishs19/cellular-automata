
//a two dimensional array to hold the states of all cells
var grid;

//a grid representing the next generation
var newGrid;

//number of cells in the x and y direction
var gridWidth = 40;
var gridHeight = 30;

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
    grid = create2DArray(gridWidth,gridHeight);
    console.log(grid);

    noLoop();
    redraw();
}

function draw () {
    background(255);

    //draw the the grid 
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            let x = i * rectWidth;
            let y = j * rectHeight;

            var cellState = grid[i][j];
            if (cellState == 0) {
                fill('grey');
            }
            else if (cellState == 1) {
                fill('black');
            }
            stroke('white');
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
    var nextGen = create2DArray(gridWidth,gridHeight);
    console.log('nextGen');
    console.log(nextGen);
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

            //the value of the current cell
            let self = grid[i][j];

            nextGen[i][j] = rules(self,topLeft,top,topRight,left,right,bottomLeft,bottom,bottomRight);
        }
    }

    //copy the new generation to the actual grid
    grid = nextGen;

}

//diese function müsst ihr so verändern, dass das gewünschte verhalten daraus resultiert
function rules(self,topLeft,top,topRight,left,right,bottomLeft,bottom,bottomRight){
    //here you can set the rules which should apply to an individual cell

    //example rule
    //if there is a neighbour to the direct top, left, right or bottom side,
    //then return 1 with a certain probability, otherwise return 0 
    if(top == 1 || right == 1  || left == 1 || bottom == 1){
        if(random(0,1) > 0.5){
            return 1;
        }
        else return 0;
    }
    else return 0;

    //example rule
    //e.g. if there are equal or more than three neighbor cells with state 1, then return 1
    //else return 0
    // let sum = topLeft+top+topRight+left+right+bottomLeft+bottom+bottomRight;
    // if(sum>=3){
    //     return 1;
    // }
    // else return 0;

    //example rule
    //if at least one neighbor has state one, then return 1, else return 0
    // let sum = topLeft+top+topRight+left+right+bottomLeft+bottom+bottomRight;
    // if(sum>=1){
    //     return 1;
    // }
    // else return 0;

    //example rule
    // if(topLeft == 1 && topRight == 1 && bottomLeft == 1 && bottomRight == 1){
    //     return 1;
    // }
    // else {
    //     return 0;
    // }
}

function create2DArray(w,h){
   var arr =  new Array(w);
    for (var i = 0; i < w; i++) {
        arr[i] = new Array(h);
    }

    //initialize the grid cells with 0
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

// function updateCell (xindex, yindex) {

//     if (grid[xindex][yindex] == 0) {
//         return;
//     }
//     // if(grid[xindex][yindex] == 1){
//     //     newGrid[xindex][yindex] == 1;
//     // }
//     //here we know that grid[xindex][yindex] == 1
//     for (var i = -1; i <= 1; i++) {
//         for (var j = -1; j <= 1; j++) {
//             var x = xindex + i;
//             var y = yindex + j;
//             if (x < 0 || x >= gridWidth || y < 0 || y >= gridHeight) {
//                 continue;
//             }
//             //rules
//             //upper left
//             if (i == -1 && j == -1) {
//                 if (random(0, 1) > 0) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //upper
//             if (i == 0 && j == -1) {
//                 if (random(0, 1) > 1) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //upper right
//             if (i == 1 && j == -1) {
//                 if (random(0, 1) > 0) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //left
//             if (i == -1 && j == 0) {
//                 if (random(0, 1) > 1) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //center
//             if (i == 0 && j == 0) {

//                 newGrid[x][y] = 1;

//             }
//             //right
//             if (i == 1 && j == 0) {
//                 if (random(0, 1) > 1) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //lower left
//             if (i == -1 && j == 1) {
//                 if (random(0, 1) > 0) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //lower
//             if (i == 0 && j == 1) {
//                 if (random(0, 1) > 1) {
//                     newGrid[x][y] = 1;
//                 }
//             }
//             //lower right
//             if (i == 1 && j == 1) {
//                 if (random(0, 1) > 0.9) {
//                     newGrid[x][y] = 1;
//                 }
//             }

//         }
//     }
// }

