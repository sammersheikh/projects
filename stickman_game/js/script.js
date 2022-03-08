/*----- constants -----*/
const img1 = `<img src='https://i.postimg.cc/6QxQYhnS/stickman1.png' border='0' alt='stickman1'/>` 
const img2 = `<img src='https://i.postimg.cc/C1FxVLvs/stickman2.png' border='0' alt='stickman2'/>`
const img3 = `<img src="https://i.postimg.cc/xCtTjDhD/stickman3.png" alt="stickman3"/>`
const img4 = `<img src="https://i.postimg.cc/C52hDCwc/stickman4.png" alt="stickman4"/>`
const img5 = `<img src="https://i.postimg.cc/wjLqysZk/stickman5.png" alt="stickman5"/>`
const img6 = `<img src="https://i.postimg.cc/Bv3qxnGf/stickman6.png" alt="stickman6"/>`
const img7 = `<img src="https://i.postimg.cc/k4XqpY4j/stickman7.png" alt="stickman7"/>`
const img8 = `<img src="https://i.postimg.cc/qBF41LdL/stickman8.png" alt="stickman8"/>`
const img9 = `<img src="https://i.postimg.cc/mgyrpHjg/stickman9.png" alt="stickman9"/>`
const img10 = `<img src="https://i.postimg.cc/nhWT2m6s/stickman.png" alt="stickman"/>`


const words = ['apple', 'matrix', 'subway', 'boggle', 'oxidize', 'ivy', 'zombie', 'pixel'];
const underscore = '_ ';
/*----- app's state (variables) -----*/

let guesses, guessedLetter, currentWord, wordLength, blankWord, wins = null;
let guessedWord = []
let currentWordArr = []

/*----- cached element references -----*/


/*----- event listeners -----*/

// Generate button listener --> calls generate word function
$('#generateBtn').on('click', generateWord);

// Submit button listener --> calls getInput function
$('#submitBtn').on('click', getInput);



/*----- functions -----*/


// Generate random word function

function generateWord() {
    currentWord = words.pop(); 
    wordLength = currentWord.length
    blankWord = underscore.repeat(wordLength)
    $('h1.underscore').html(blankWord)
    separateCurrentWord()
    separateBlankWord()
}

// Get input from user function (on event listener for submit button)

function getInput() {
    guessedLetter = $('#input').val();
    $('#input').val('')
}

// separates the currentWord and blankWord strings into letters/underscores into separate arrays 
let splitWord = null;
function separateCurrentWord() {
    splitWord = currentWord.split('');
}

let splitBlankWord = null;
function separateBlankWord() {
    splitBlankWord = blankWord.split(/[' ']/)
    splitBlankWord.pop()
}

// Check if guessed letter is in splitWord (generated word that is split into letters in an array)
// Will get called in the getInput() function
function isLetterCorrect() {
    
}


// Add image when guess is wrong
// $('div.stickman').append(img1); <-- How to display the stickman 