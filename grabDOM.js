import { compareSelection, rockPaperScissors } from './logic.js';

const resultsSpan = document.getElementById("result-span");
const winsSpan = document.getElementById("wins-span");
const lossesSpan = document.getElementById("losses-span");
const totalSpan = document.getElementById("total-span");
const drawsSpan = document.getElementById("draws-span");
const winPercentSpan = document.getElementById("win-percent-span");
const resetCounter = document.getElementById('reset-counter');
const winLose = document.getElementById('win-lose');

export const userSelection = () => document.querySelector(':checked').value;

let wins = 0;
let draws = 0;
let total = 0;
let losses = () => total - wins;
let winPercentage = () => Math.trunc((wins / total) * 100);
let resets = 0;

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
        winLose.textContent = 'its a draw';
        draws++;
    } else if (value === "win") {
        winLose.textContent = 'Yay! You won!';
        wins++;
        total++;
    } else if (value === "lose") {
        winLose.textContent = 'Ahh schucks! you lost';
        total++;
    }
}
export function resetCounters() {
    resets++;
    wins = 0;
    draws = 0;
    total = 0;
    resultsSpan.textContent = 0;
    winPercentSpan.textContent = 0;
    winsSpan.textContent = wins;
    drawsSpan.textContent = draws;
    totalSpan.textContent = total;
    lossesSpan.textContent = 0;
    resetCounter.textContent = `Resets: ${resets}`;
}