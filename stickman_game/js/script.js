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


const words = ['apple', 'matrix', 'subway', 'boggle', 'oxidize', 'ivy', 'zombie', 'pixel']

/*----- app's state (variables) -----*/

let guesses = null;
let guessedWord = []

/*----- cached element references -----*/


/*----- event listeners -----*/

// Generate button listener --> calls generate word function

$('#generateBtn').on('click', function() {
    console.log('stick')
    $('div.stickman').append(img1);
})

/*----- functions -----*/


// Generate random word function

// Add image when guess is wrong
// $('div.grid-item-2').append(img1); <-- How to display the stickman 