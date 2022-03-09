/*----- constants -----*/

const gameBoard = [
    
    'brd0','brd1','brd2','brd3','brd4','brd5','brd6',
    'brd7','brd8','brd9','brd10','brd11','brd12','brd13',
    'brd14','brd15','brd16','brd17','brd18','brd19','brd20',
    'brd21','brd22','brd23','brd24','brd25','brd26','brd27',
    'brd28','brd29','brd30','brd31','brd32','brd33','brd34',
    'brd35','brd36','brd37','brd38','brd39','brd40','brd41'

]

const player1 = 1;
const player2 = -1;

/*----- app's state (variables) -----*/

let selectedPiece, spotTaken, idx = null;
let playerTurn = -1;

/*----- cached element references -----*/


/*----- event listeners -----*/

// Listening on the div "gamePiece"
$('tbody tr').on('click','div', selectColumn);

/*----- functions -----*/

// selectColumn() function will make each column clickable
//  ^(called by event listener for the circle divs)
function selectColumn(evt) {
    selectedPiece = evt.target.id.match(/\d+/) //returns first occurence of numbers from a string
    idx = gameBoard.find(function(idx) {
        return idx === (gameBoard[selectedPiece])
    }) 
    if (idx === 1 || idx === -1) {
        alert('That spot is taken')   
    } else if (idx !== 1 || idx !== -1) {
        playerTurn = (playerTurn * -1)
        gameBoard[selectedPiece] = playerTurn;
        if (playerTurn === 1) {
            console.log('player1')
            $(`#${evt.target.id}`).css("background-color","blue")
        } else if (playerTurn === -1) {
            console.log('player2')
            $(`#${evt.target.id}`).css("background-color","red")
        }
    }
}