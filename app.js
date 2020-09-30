// import functions and grab DOM elements

const submitButton = document.querySelector("button");

const resultsSpan = document.getElementById("results-span");
const winsSpan = document.getElementById("wins-span");
const lossesSpan = document.getElementById("losses-span");
const winPercentSpan = document.getElementById("win-percent-span");


const userSelection = document.querySelector(':checked').value;


// initialize state
let wins = 0;
let draws = 0;
let total = 0;
let losses = total - wins;
let winPercentage = (Math.trunc((wins / total) * 100));

// set event listeners to update state and DOM

function rockPaperScissors() {

    const randomNum = Math.ceil(Math.random() * 3);
    let rockPaperScissors;

    if (randomNum === 1) {
        rockPaperScissors = 'rock';
    } else if (randomNum === 2) {
        rockPaperScissors = 'paper';
    } else if (randomNum === 3) {
        rockPaperScissors = 'scissors';
    }

    return rockPaperScissors;
};


function compareSelection(computer, player) {

    computer = rockPaperScissors();
    player = userSelection;
    let result;

    if (computer === 'rock' && player === 'rock') {
        result = 'draw';
        draws++;
    } else if (computer === 'rock' && player === 'paper') {
        result = 'win';
        wins++;
        total++;
    } else if (computer === 'rock' && player === 'scissors') {
        result = 'lose';
        total++;
    } else if (computer === 'paper' && player === 'rock') {
        result = 'lose';
        total++;
    } else if (computer === 'paper' && player === 'paper') {
        result = 'draw';
        draws++;
    } else if (computer === 'paper' && player === 'scissors') {
        result = 'win';
        wins++;
        total++;
    } else if (computer === 'scissors' && player === 'rock') {
        result = 'win';
        wins++;
        total++;
    } else if (computer === 'scissors' && player === 'paper') {
        result = 'lose';
        total++;
    } else if (computer === 'scissors' && player === 'scissors') {
        result = 'draw';
        total++;
    }

    return result;
}


submitButton.addEventListener("click", (e) => {

    compareSelection();
    console.log(compareSelection());
    // compareSelection returns "win", "lose", or "draw";

    console.log('wins: ', wins);
    console.log('total: ', total);
    console.log('draws: ', draws);
    console.log('losses: ', losses);
    console.log('win %: ', winPercentage);

});