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
