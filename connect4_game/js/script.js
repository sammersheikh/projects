/*----- constants -----*/

const gameBoard = [
    
    ['brd0','brd1','brd2','brd3','brd4','brd5','brd6'],
    ['brd7','brd8','brd9','brd10','brd11','brd12','brd13'],
    ['brd14','brd15','brd16','brd17','brd18','brd19','brd20'],
    ['brd21','brd22','brd23','brd24','brd25','brd26','brd27'],
    ['brd28','brd29','brd30','brd31','brd32','brd33','brd34'],
    ['brd35','brd36','brd37','brd38','brd39','brd40','brd41'],

]

/* 2D array rows and column logic:

gameBoard[0][0] === 'brd0'
gameBoard[1][0] === 'brd7'
gameBoard[2][0] === 'brd14'
gameBoard[3][0] === 'brd21'
gameBoard[4][0] === 'brd28'
gameBoard[5][0] === 'brd35'

*/

const player1 = 1;
const player2 = -1;

/*----- app's state (variables) -----*/

let rowId, colId, idx = null;
let playerTurn = -1;

/*----- cached element references -----*/


/*----- event listeners -----*/

// Listening on the div "gamePiece"
$('tbody tr').on('click','div', selectColumn);
// $('table colgroup').on('click','.column4', insertPiece)

// /*----- functions -----*/

function insertPiece() {
    console.log('hello')
}

// selectColumn() function will make each column clickable
//  ^(called by event listener for the circle divs)
function selectColumn(evt) {
    const tR = (evt.delegateTarget.id)
    rowId = tR.match(/\d+/)[0]
    colId = (evt.target.id).match(/\d+/)[0]  //.match(/\d+/)[0] //returns first occurence of numbers from a string
    console.log(gameBoard[rowId][colId])
    playerTurn = (playerTurn * -1)

    // if (selectedPiece === 'brd0' || 'brd1' || 'brd2' || 'brd3' || 'brd4' || 'brd5' || 'brd6') { 
    //     console.log('this')
    // } else {
    //     console.log('false')
    // }

    // gameBoard.forEach(function(row) {
    //     row.forEach(function(colElem) {
    //         if (colElem === colId) { //this is checking every single element in the 2D array for selectedPiece. gameBoard array has the same element names as the ids so everytime i click, it will always fire off the console.log because there will always be that id in there
    //             // This is good for checking if the array already has the piece
    //             console.log('workd')
    //         } 
    //     })
    // })

    // idx = gameBoard.find(function(idx) {
    //     return idx === (gameBoard[selectedPiece])
    // }) 
    // if (idx === 1 || idx === -1) {
    //     alert('That spot is taken')   
    // } else if (idx !== 1 || idx !== -1) {
        
    //     gameBoard[selectedPiece] = playerTurn;
    //     if (playerTurn === 1) {
    //         console.log('player1 (1)')
    //         $('.playerTurn').html("Player 2's Turn")
    //         $(`#${evt.target.id}`).css("background-color","blue")
    //     } else if (playerTurn === -1) {
    //         console.log('player2 (-1)')
    //         $('.playerTurn').html("Player 1's Turn")
    //         $(`#${evt.target.id}`).css("background-color","red")
    //     }
    // }
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


//         // if (idx > -1 && idx < 7) {
//         //     filterGame.push(spot) 
//         // }
//         // if (spot === 1) {
//         //     player1Spots.push(idx)
//         // } else if (spot === -1) {
//         //     player2Spots.push(idx)
//         // }
//     })
// }

/*
Possible ways to check win:
1. If 4 indexes in the array have 1 or -1 consecutively (vertically, horizontally, or diagnonally)
2. Check the css of the html board and check if there are 4 'background-color: blue/red' in a row
3. When a game piece is selected, check surrounding indexes for same result 3 times in each direction
// Adding 4 indexes together, if they equal 4, then player 1 wins else if they equal -4 then player 2 wins
// Using the html rows, i can check for the bgColor to check each row for 
*/