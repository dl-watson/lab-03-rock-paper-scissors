// import functions and grab DOM elements

import {
    compareSelection,
    rockPaperScissors
} from './logic.js';

import {
    updateHTML,
    incrementCounters,
    userSelection
} from './grabDOM.js';


const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e) => {

    const value = compareSelection(rockPaperScissors(), userSelection());

    incrementCounters(value);

    updateHTML();

});
