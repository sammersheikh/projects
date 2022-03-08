/*----- constants -----*/

const imgArr = [
    ``,
    `<img src='https://i.postimg.cc/6QxQYhnS/stickman1.png' id="stickImg" border='0' alt='stickman1'/>`,
    `<img src='https://i.postimg.cc/C1FxVLvs/stickman2.png' id="stickImg" border='0' alt='stickman2'/>`,
    `<img src="https://i.postimg.cc/xCtTjDhD/stickman3.png" id="stickImg" alt="stickman3"/>`,
    `<img src="https://i.postimg.cc/C52hDCwc/stickman4.png" id="stickImg" alt="stickman4"/>`,
    `<img src="https://i.postimg.cc/wjLqysZk/stickman5.png" id="stickImg" alt="stickman5"/>`,
    `<img src="https://i.postimg.cc/Bv3qxnGf/stickman6.png" id="stickImg" alt="stickman6"/>`,
    `<img src="https://i.postimg.cc/k4XqpY4j/stickman7.png" id="stickImg" alt="stickman7"/>`,
    `<img src="https://i.postimg.cc/qBF41LdL/stickman8.png" id="stickImg" alt="stickman8"/>`,
    `<img src="https://i.postimg.cc/mgyrpHjg/stickman9.png" id="stickImg" alt="stickman9"/>`,
    `<img src="https://i.postimg.cc/nhWT2m6s/stickman.png" id="stickImg" alt="stickman"/>`,
]

const words = ['apple', 'matrix', 'subway', 'boggle', 'oxidize', 'ivy', 'zombie', 'pixel'];
const underscore = '_ ';

/*----- app's state (variables) -----*/

let guessedLetter, currentWord, wordLength, blankWord, indexOfLetter, splitWord, splitBlankWord = null;
let wrongGuesses = 0;
let wins = 0;
let losses = 0;
let guessedWord = []
let currentWordArr = []

/*----- cached element references -----*/


/*----- event listeners -----*/

// Generate button listener --> calls generate word function
$('#generateBtn').on('click', generateWord);

// Submit button listener --> calls getInput function
$('#submitBtn').on('click', submitGuess);

/*----- functions -----*/



// Generate random word function
function generateWord() {
    currentWord = words.pop(); 
    wordLength = currentWord.length
    blankWord = underscore.repeat(wordLength)
    $('h1.underscore').html(blankWord)
    separateCurrentWord()
    separateBlankWord()
    restartGame()
}

// Get input from user function (on event listener for submit button)
function submitGuess() {
    guessedLetter = $('#input').val();
    $('#input').val('');
    isLetterCorrect();
    winLoss()
}

// separates the currentWord and blankWord strings into letters/underscores into separate arrays 
function separateCurrentWord() {
    splitWord = currentWord.split('');
}

function separateBlankWord() {
    splitBlankWord = blankWord.split(/[' ']/)
    splitBlankWord.pop()
}
// Check if guessed letter is in splitWord (generated word that is split into letters in an array)
// Will get called in the submitGuess() function
function isLetterCorrect() {
    indexOfLetter = splitWord.findIndex(function(letter) {
        return letter === guessedLetter;
    })
    if (indexOfLetter === -1) {
        // alert('Wrong! Guess again.') // -------> Add better notification system
        wrongGuesses++;
        if ($("div.stickman:has(img)").length > 0) {
            $('#stickImg').remove()
        }
        $('div.stickman').append(imgArr[wrongGuesses]);
        $('#guessedLetters').append(`${guessedLetter}, `)
    } else if (indexOfLetter !== -1) {
        // alert('CORRECT!') // ---------------> Add better notification system
        splitBlankWord[indexOfLetter] = guessedLetter;
        const correctGuess = splitBlankWord.join(' ');
        $('h1.underscore').html(correctGuess);
    }

}

// Restart game function when generate word is clicked (clears the board)
function restartGame() {
    $('#guessedLetters').text('');    
    if ($("div.stickman:has(img)").length > 0) {
    $('#stickImg').remove()
    }
    wrongGuesses = 0;
}
let correctGuess = null; //DELETE GLOBAL VARIABLE - - DECLARE IN FUNCTION BELOW
// Win/Loss function (calls restartGame() if wrongGuesses > 9)
function winLoss() {
    correctGuess = splitBlankWord.find(function(char) {
        return char === '_'
    })
    if (wrongGuesses > 9) {
        console.log('loser')
        losses++ // ---------------> Not incrementing - returns NaN
        $('#losses').html(losses) // ^
        alert('You LOSE!')
    } else if (!correctGuess) {
        console.log('winner')
        wins++
        $('#wins').html(wins)
    }
}