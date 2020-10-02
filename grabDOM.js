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
let reset = 0;

let losses = () => (total - wins - draws);
let winPercentage = () => Math.trunc((wins / total) * 100);

export function updateHTML() {

    winPercentSpan.textContent = winPercentage();
    winsSpan.textContent = wins;
    drawsSpan.textContent = draws;
    totalSpan.textContent = total;
    lossesSpan.textContent = losses();
}

export function incrementCounters(value) {
    if (value === "draw") {
        winLose.textContent = 'womp, it\'s a draw';
        draws++;
        total++;
    } else if (value === "win") {
        winLose.textContent = 'hey! you won!';
        wins++;
        total++;
    } else if (value === "lose") {
        winLose.textContent = 'aw shucks! you lost';
        total++;
    }

    resultsSpan.textContent = value;

}
export function resetCounters() {
    reset++;

    wins = 0;
    draws = 0;
    total = 0;

    resultsSpan.textContent = 0;
    winPercentSpan.textContent = 0;
    winsSpan.textContent = 0;
    drawsSpan.textContent = 0;
    totalSpan.textContent = 0;
    lossesSpan.textContent = 0;
    resetCounter.textContent = `${reset} reset(s)`;
}