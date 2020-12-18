let currentPlayer = "X";


function winMessage() {
    return "Player " + currentPlayer + " has won!";
}

function currnentChoise() {
    return "It's " + currentPlayer + "'s turn";
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "Y" : "X";
}

let vinPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameOver = false;

let positions = ["", "", "", "", "", "", "", "", ""];
let counter = 0;

function markSell(a) {
    counter++;
    if (positions[a - 1] == "" && !gameOver) {
        document.getElementById(a).innerText = currentPlayer;
        positions[a - 1] = currentPlayer;
        checkEnd();
    } else {
        return;
    }
}

function checkEnd() {
    if (counter == 9) {
        gameOver = true;
        document.getElementById("game-state").innerText = "Game ended in a draw!";
    } else {
        for (let i = 0; i < vinPositions.length; i++) {
            const condition = vinPositions[i];
            let a = positions[condition[0]];
            let b = positions[condition[1]];
            let c = positions[condition[2]];

            if (a == "" || b == "" || c == "") {
                continue;
            }
            if (a == b && b == c) {
                gameOver = true;
                document.getElementById("game-state").innerText = winMessage();
                return;
            }
        }
        changePlayer();
        document.getElementById("game-state").innerText = currnentChoise();
    }
}

function resetGame() {
    positions = ["", "", "", "", "", "", "", "", ""];
    counter = 0;
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("game-state").innerText = "Game started";
    document.querySelectorAll('.grid-unit')
        .forEach(cell => cell.innerHTML = "");
}