'use strict';

const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');

const randomNumber = () => Math.floor(Math.random() * 6) + 1;

const displayDice = function (number) {
  dice.src = `assets/images/dice-${number}.png`;
};

btnRollDice.addEventListener('click', function () {
  const number = randomNumber();
  displayDice(number);
});
