
export function rockPaperScissors() {

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
}

// checkResult
export function compareSelection(computer, player) {
    let result;

    if (computer === 'rock' && player === 'rock') {
        result = 'draw';
    } else if (computer === 'rock' && player === 'paper') {
        result = 'win';
    } else if (computer === 'rock' && player === 'scissors') {
        result = 'lose';
    } else if (computer === 'paper' && player === 'rock') {
        result = 'lose';
    } else if (computer === 'paper' && player === 'paper') {
        result = 'draw';
    } else if (computer === 'paper' && player === 'scissors') {
        result = 'win';
    } else if (computer === 'scissors' && player === 'rock') {
        result = 'win';
    } else if (computer === 'scissors' && player === 'paper') {
        result = 'lose';
    } else if (computer === 'scissors' && player === 'scissors') {
        result = 'draw';
    }

    return result;
}
