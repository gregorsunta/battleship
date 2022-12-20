'use strict';

import { form, game } from '/src/components/dom.js';
import Player from '/src/components/player.js';

// show popup *if checkbox => cover player 2
// getNames on pressing start
// show gameboards
// player one choose ship positions
// HIDE player one gameboard
// player two choose ship positions
// HIDE player two gameboard
// player one's turn to select the enemies gameboard *disable player one's gameboard
// player two's turn to select the enemies gameboard *disable player two's gameboard
// ***CHECK FOR WIN EVERY TURN

const processForm = (function () {
  const options = form.options;
  const players = form.players;

  const showError = function (errorContainer, msg) {
    errorContainer.classList.remove('hide');
    errorContainer.textContent = msg;
  };
  const hideElement = function (el) {
    el.classList.add('hide');
  };
  options.optionComputer.input.addEventListener('input', () => {
    if (options.optionComputer.input.checked) {
      players.playerTwo.container.classList.add('fade');
      players.playerTwo.input.disabled = true;
      players.playerTwo.input.value = '';
    } else {
      players.playerTwo.container.classList.remove('fade');
      players.playerTwo.input.disabled = false;
    }
  });
  options.optionSize.input.addEventListener('input', () => {
    options.optionSize.output.textContent = options.optionSize.input.value;
  });

  form.button.addEventListener('click', (e) => {
    e.preventDefault();
    hideElement(players.playerOne.error);
    hideElement(players.playerTwo.error);
    if (
      players.playerOne.input.validity.valid &&
      players.playerTwo.input.validity.valid
    ) {
      const firstName = players.playerOne.input.value;
      const secondName = players.playerTwo.input.value;
      const computerOption = options.optionComputer.input.checked;
      const gameboardSize = options.optionSize.input.value;
      initiateGame([firstName, secondName], gameboardSize, computerOption);
    } else {
      // there was an error
      if (players.playerOne.input.validity.valueMissing) {
        showError(players.playerOne.error, 'A name is required.');
        console.log('here1');
      }
      if (players.playerTwo.input.validity.valueMissing) {
        showError(players.playerTwo.error, 'A name is required.');
        console.log('here2');
      }
    }
  });
})();

const initiateGame = function (
  [firstName, secondName],
  gameboardSize,
  computerOption,
) {};
