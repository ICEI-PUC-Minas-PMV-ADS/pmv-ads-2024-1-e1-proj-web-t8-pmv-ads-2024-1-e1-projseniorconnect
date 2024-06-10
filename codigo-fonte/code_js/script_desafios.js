// Array para armazenar a sequência de cores
var sequence = [];
// Array para armazenar a sequência de cores inseridas pelo usuário
var userSequence = [];

// Função para gerar uma nova sequência de cores
function generateSequence() {
  sequence = [];
  var colors = ['red', 'green', 'blue', 'yellow'];
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    sequence.push(colors[randomIndex]);
  }
}

// Função para exibir a sequência de cores para o jogador
function displaySequence() {
  sequence.forEach(function(color, index) {
    setTimeout(function() {
      var colorBox = document.querySelector('[data-color="' + color + '"]');
      colorBox.classList.add('highlight');
      setTimeout(function() {
        colorBox.classList.remove('highlight');
      }, 500);
    }, index * 1000);
  });
}

// Função para verificar se a sequência do jogador está correta
function checkSequence(color) {
  userSequence.push(color);
  if (userSequence.length === sequence.length) {
    var isCorrect = userSequence.every(function(value, index) {
      return value === sequence[index];
    });
    if (isCorrect) {
      alert('Parabéns! Você acertou a sequência.');
      startGame();
    } else {
      alert('Ops! Você errou a sequência. Tente novamente.');
      userSequence = [];
      displaySequence();
    }
  }
}

// Função para reiniciar o jogo
function startGame() {
  userSequence = [];
  generateSequence();
  displaySequence();
}

// Chama a função para iniciar o jogo quando a página carrega
window.onload = startGame;
