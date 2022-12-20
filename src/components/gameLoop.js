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
const Gameloop = (function () {
  const hideElement = function (container) {
    container.classList.add('hide');
  };
  const processForm = (function () {
    const options = form.options;
    const players = form.players;
    const showError = function (errorContainer, msg) {
      errorContainer.classList.remove('hide');
      errorContainer.textContent = msg;
    };
    const togglePLayerTwo = function () {
      if (options.optionComputer.input.checked) {
        players.playerTwo.container.classList.add('fade');
        players.playerTwo.input.disabled = true;
        players.playerTwo.input.value = '';
      } else {
        players.playerTwo.container.classList.remove('fade');
        players.playerTwo.input.disabled = false;
      }
    };
    const displaySliderValue = function (input, output) {
      output.textContent = input.value;
    };
    const getFormInput = function (players, options) {
      const firstName = players.playerOne.input.value;
      const secondName = players.playerTwo.input.value;
      const computerOption = options.optionComputer.input.checked;
      const gameboardSize = options.optionSize.input.value;
      return { firstName, secondName, computerOption, gameboardSize };
    };
    const displayError = function (player) {
      if (player.input.validity.valueMissing) {
        showError(player.error, 'A name is required.');
      }
    };
    options.optionComputer.input.addEventListener('input', () => {
      togglePLayerTwo();
    });
    options.optionSize.input.addEventListener('input', () => {
      displaySliderValue(options.optionSize.input, options.optionSize.output);
    });
    form.button.addEventListener('click', (e) => {
      e.preventDefault();
      for (let player in players) {
        hideElement(players[player].error);
      }
      if (
        players.playerOne.input.validity.valid &&
        players.playerTwo.input.validity.valid
      ) {
        initiateGame(getFormInput(players, options));
      } else {
        for (let player in players) {
          displayError(players[player]);
        }
      }
    });
  })();
  const initiateGame = function (obj) {
    hideElement(form.container);
    const players = {
      playerOne: new Player(obj.firstName),
      playerTwo: () => {
        if (obj.computerOption) {
          return new Player('Computer', true);
        } else {
          return new Player(obj.secondName, false);
        }
      },
    };
    const gameboards = {
      gameboardOne: players.playerOne.attachGameboard(obj.gameboardSize),
      gameboardTwo: players.playerTwo.attachGameboard(obj.gameboardSize),
    };
    for (let gameboard in gameboards) {
      for (let square in gameboard.squares) {
      }
    }
  };
})();
