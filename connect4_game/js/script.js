 /*----- constants -----*/

const gameBoard = [
    
    ['a0','a1','a2','a3','a4','a5','a6'],
    ['b0','b1','b2','b3','b4','b5','b6'],
    ['c0','c1','c2','c3','c4','c5','c6'],
    ['d0','d1','d2','d3','d4','d5','d6'],
    ['e0','e1','e2','e3','e4','e5','e6'],
    ['f0','f1','f2','f3','f4','f5','f6'],

]

const player1 = 1;
const player2 = -1;

/*----- app's state (variables) -----*/

let rowId, colId, selectedPiece, turns = null;
let playerTurn = -1;
let accP1 = null;
let accP2 = 0;

/*----- cached element references -----*/


/*----- event listeners -----*/

// Listening on the div "gamePiece"

$('tbody tr').on('click','div', selectColumn);
// $('table colgroup').on('click','.column4', insertPiece)

// /*----- functions -----*/

// selectColumn() function will make each column clickable
//  ^(called by event listener for the circle divs)
function selectColumn(evt) {
    const tR = (evt.delegateTarget.id)
    rowId = tR.match(/\d+/)[0]
    colId = (evt.target.id).match(/\d+/)[0]  //.match(/\d+/)[0] //returns first occurence of numbers from a string
    playerTurn = (playerTurn * -1)
    countTurns() 
    insertPiece()
    findWinner()
} 


// check the first index of each row from highest index row to lowest. Set playerTurn to first
    // empty index in iterated row[colId]
function insertPiece() {
    for (let i = gameBoard.length - 1; i >= 0; i--) {
        if (gameBoard[i][colId] !== 1 && gameBoard[i][colId] !== -1) {
            selectedPiece = gameBoard[i][colId]
            gameBoard[i][colId] = playerTurn
                if (playerTurn === 1) {
                    console.log('player1 (1)')
                    $('.playerTurn').html("Player 2's Turn")
                    $(`#${selectedPiece}`).css("background-color","blue")
                } else if (playerTurn === -1) {
                    console.log('player2 (-1)')
                    $('.playerTurn').html("Player 1's Turn")
                    $(`#${selectedPiece}`).css("background-color","red")
                    }
            break;
        }
    }
}

/* findWinner():
    1. Check each row for 4 (1's or -1's) or check if 4 indexes equal 4 or -4 by adding them up
    2. Check each column
    3. Check diagonals
*/

function findWinner() {
    if (turns > 6) { // CHANGE TO 6 WHEN COMPLETE
        for (let i = gameBoard.length - 1; i >= 0; i--) {
            for (let j = 0; j < gameBoard[i].length; j++) {
               if (gameBoard[i][j] === gameBoard[i][j + 1]) {
                   if (gameBoard[i][j + 1] === gameBoard[i][j + 2]) {
                       if (gameBoard[i][j + 2] === gameBoard[i][j + 3]) {
                        console.log('4inarow')
                        }
                    }   
                }
            }
        }
    }
}

function countTurns() {
    turns++
}
// let player1Spots = [];
// let player2Spots = [];
// check winner - if a player has 4 game pieces of the same color in a row
// function checkWinner() {
//     // if array has 4 (1 or -1) next to each other, return those
//     // out of those returned, check if there are 4 (1's) or 4(-1's) in successive indexes
//     gameBoard.forEach(function(spot, idx) {
//         if (spot === 1) {
//             player1Spots.push(idx + ':' + spot)
//         } 


/*
Possible ways to check win:
1. If 4 indexes in the array have 1 or -1 consecutively (vertically, horizontally, or diagnonally)
2. Check the css of the html board and check if there are 4 'background-color: blue/red' in a row
3. When a game piece is selected, check surrounding indexes for same result 3 times in each direction
// Adding 4 indexes together, if they equal 4, then player 1 wins else if they equal -4 then player 2 wins
// Using the html rows, i can check for the bgColor to check each row for */