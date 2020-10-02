
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
// there is less code and it is easer to read 
    if (computer === player) {
        return 'draw';
    } else if (computer === 'rock' && player === 'paper') {
        return 'win';
    } else if (computer === 'paper' && player === 'scissors') {
        return 'win';
    } else if (computer === 'scissors' && player === 'rock') {
        return 'win';
    } else {
        return 'lose';
    }
}
