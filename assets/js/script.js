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

// Rola um número aleatório
const rollDice = () => Math.floor(Math.random() * 6) + 1;

const displayDice = function (diceNumber) {
  diceEl.src = `assets/images/dice-${diceNumber}.png`;
  diceEl.classList.remove('hidden');
};

btnRollDice.addEventListener('click', function () {
  const diceNumber = rollDice();
  displayDice(diceNumber);
});
