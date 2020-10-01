// IMPORT MODULES under test here:
import {
    rockPaperScissors,
    compareSelection
} from '../logic.js';


const test = QUnit.test;

// The function should be didUserWin(), not checkResult(), but it should still return win, lose, or draw
test('rockPaperScissors (getRandomThrow) should return a string', (expect) => {

    const actual = rockPaperScissors();

    expect.equal(typeof actual, 'string');
});

// 

test('compareSelection should return draw when passed rock and rock', (expect) => {

    let computer = "rock";
    let player = "rock";

    const expected = "draw";

    const actual = compareSelection(computer, player);

    expect.equal(actual, expected);
});

test('compareSelection should return win when passed rock and paper', (expect) => {

    let computer = "rock";
    let player = "paper";

    const expected = "win";

    const actual = compareSelection(computer, player);

    expect.equal(actual, expected);
});

test('compareSelection should return lose when passed rock and scissors', (expect) => {

    let computer = "rock";
    let player = "scissors";

    const expected = "lose";

    const actual = compareSelection(computer, player);

    expect.equal(actual, expected);
});