// import functions and grab DOM elements

import {
    compareSelection,
    rockPaperScissors
} from './logic.js';

import {
    resetCounters,
    updateHTML,
    incrementCounters,
    userSelection
} from './grabDOM.js';


const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

submitButton.addEventListener("click", (e) => {

    const value = compareSelection(rockPaperScissors(), userSelection());

    incrementCounters(value);

    updateHTML();

});
resetButton.addEventListener('click', () => {
    resetCounters();

});