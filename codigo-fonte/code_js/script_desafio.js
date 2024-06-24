var sequence = [];
var userSequence = [];
var points = 0;

function generateSequence() {
    sequence = [];
    var colors = ['red', 'green', 'blue', 'yellow'];
    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * colors.length);
        sequence.push(colors[randomIndex]);
    }
}

function displaySequence() {
    sequence.forEach(function(color, index) {
        setTimeout(function() {
            var colorBox = document.querySelector('[data-color="' + color + '"]');
            colorBox.style.opacity = 0.5;
            setTimeout(function() {
                colorBox.style.opacity = 1;
            }, 500);
        }, index * 1000);
    });
}

function checkSequence() {
    var isCorrect = userSequence.every(function(value, index) {
        return value === sequence[index];
    });

    if (isCorrect && userSequence.length === sequence.length) {
        points++;
        document.getElementById("points").innerText = points;
        alert('Parabéns! Você acertou a sequência.');
        startGame();
    } else if (!isCorrect) {
        alert('Ops! Você errou a sequência. Tente novamente.');
        userSequence = [];
        displaySequence();
    }
}

function addToSequence(color) {
    if (userSequence.length < sequence.length) {
        userSequence.push(color);
        var colorBox = document.querySelector('[data-color="' + color + '"]');
        colorBox.classList.add('selected');
        setTimeout(function() {
            colorBox.classList.remove('selected');
        }, 500);
        checkSequence();
    }
}

function startGame() {
    userSequence = [];
    generateSequence();
    displaySequence();
}

function reset() {
    points = 0;
    document.getElementById("points").innerText = points;
    startGame();
}

window.onload = startGame;

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let playerScore = 0;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        if (currentPlayer === 'X') {
            playerScore++;
            document.getElementById('score').innerText = playerScore;
            document.getElementById('result').innerText = 'Você venceu!';
        } else {
            document.getElementById('result').innerText = 'Computador venceu!';
        }
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        document.getElementById('result').innerText = 'Empate!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (currentPlayer === 'O') {
        setTimeout(computerMove, 500); // Atraso de 0,5 segundos para a jogada do computador
    }
}

function makeMove(cell, index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        handleResultValidation();
    }
}

function resetTicTacToe() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('result').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}

function computerMove() {
    let emptyCells = board.map((value, index) => value === '' ? index : null).filter(val => val !== null);
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    board[emptyCells[randomIndex]] = 'O';
    document.querySelectorAll('.cell')[emptyCells[randomIndex]].innerText = 'O';
    handleResultValidation();
}