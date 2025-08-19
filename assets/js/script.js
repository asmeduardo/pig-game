'use strict';

// Selecionando elementos
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice'); // renomeado de 'dice'
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

// Funções existentes (atualizadas)
const rollDice = () => Math.floor(Math.random() * 6) + 1; // renomeado de 'randomNumber'

const displayDice = function (diceNumber) {
  // parâmetro renomeado
  diceEl.src = `assets/images/dice-${diceNumber}.png`; // atualizado para 'diceEl'
  diceEl.classList.remove('hidden'); // adiciona funcionalidade de mostrar dado
};

// Event listener atualizado
btnRollDice.addEventListener('click', function () {
  const diceNumber = rollDice(); // nome atualizado
  displayDice(diceNumber);
});
