/*----- constants -----*/

const gameBoard = [
    
    ['brd0','brd1','brd2','brd3','brd4','brd5','brd6',
    'brd7','brd8','brd9','brd10','brd11','brd12','brd13',
    'brd14','brd15','brd16','brd17','brd18','brd19','brd20',
    'brd21','brd22','brd23','brd24','brd25','brd26','brd27',
    'brd28','brd29','brd30','brd31','brd32','brd33','brd34',
    'brd35','brd36','brd37','brd38','brd39','brd40','brd41']

]

const player1 = 1;
const player2 = -1;

/*----- app's state (variables) -----*/

let selectedPiece, spotTaken = null;
let playerTurn = -1;

/*----- cached element references -----*/


/*----- event listeners -----*/

// Listening on the div "gamePiece"
$('tbody tr').on('click','div', selectColumn);

/*----- functions -----*/

// selectColumn() function will make each column clickable
//  ^(called by event listener for the circle divs)
function selectColumn(evt) {
    // selectedPiece = parseInt(evt.target.id)  
    selectedPiece = evt.target.id
    playerTurn = (playerTurn * -1) 
    gameBoard[0][selectedPiece] = playerTurn;
    $(`#${selectedPiece}`).attr("background-color","blue")
    // if (playerTurn === 1) {
    //     //fill background-color of selected div with blue
        
    // } else if (playerTurn === -1) {
    //     //fill background-color of selected div with red
    // }
    
}
