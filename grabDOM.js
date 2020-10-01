import { compareSelection, rockPaperScissors } from './logic.js';

const resultsSpan = document.getElementById("result-span");
const winsSpan = document.getElementById("wins-span");
const lossesSpan = document.getElementById("losses-span");
const totalSpan = document.getElementById("total-span");
const drawsSpan = document.getElementById("draws-span");
const winPercentSpan = document.getElementById("win-percent-span");

export const userSelection = () => document.querySelector(':checked').value;

let wins = 0;
let draws = 0;
let total = 0;
let losses = () => total - wins;
let winPercentage = () => Math.trunc((wins / total) * 100);


export function updateHTML() {
    resultsSpan.textContent = compareSelection(rockPaperScissors(), userSelection());
    winPercentSpan.textContent = winPercentage();
    winsSpan.textContent = wins;
    drawsSpan.textContent = draws;
    totalSpan.textContent = total;
    lossesSpan.textContent = losses();
}

export function incrementCounters(value) {
    if (value === "draw") {
        draws++;
        total++;
    } else if (value === "win") {
        wins++;
        total++;
    } else if (value === "lose") {
        total++;
    }
}