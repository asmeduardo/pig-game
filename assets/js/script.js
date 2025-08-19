'use strict';

// Selecionando elementos
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

// Variáveis do jogo
let totalScores = [0, 0]; // [player0, player1]
let currentScore = 0;
let activePlayer = 0; // 0 ou 1
let isPlaying = true;

// Condições iniciais
const init = function () {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  // Resetar interface
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

// Rola um número aleatório
const rollDice = () => Math.floor(Math.random() * 6) + 1;

const displayDice = function (diceNumber) {
  diceEl.src = `assets/images/dice-${diceNumber}.png`;
  diceEl.classList.remove('hidden');
};

// Atualiza score atual na tela
const updateCurrentScoreDisplay = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

// Troca de jogador
const switchPlayer = function () {
  // Zerar score atual
  currentScore = 0;
  updateCurrentScoreDisplay();

  // Trocar jogador ativo
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Trocar classe visual
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRollDice.addEventListener('click', function () {
  if (!isPlaying) return;

  // Gerar rolagem
  const diceNumber = rollDice();

  // Mostrar dado
  displayDice(diceNumber);

  // Verificar se rolou 1
  if (diceNumber !== 1) {
    // Somar ao score atual
    currentScore += diceNumber;
    updateCurrentScoreDisplay();
  } else {
    // Trocar jogador
    switchPlayer();
  }
});

// Inicializar o jogo
init();
