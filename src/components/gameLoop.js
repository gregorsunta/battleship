'use strict';

import { form, game } from '/src/components/dom.js';
import Player from '/src/components/player.js';

const Gameloop = (function () {
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
        form.container.reset();
      } else {
        for (let player in players) {
          displayError(players[player]);
        }
      }
    });
  })();
  const initiateGame = function (obj) {
    hideElement(form.container);

    const gameContainer = game.container;
    const leftContainer = game.leftPlayer.gameboard.container;
    const rightContainer = game.rightPlayer.gameboard.container;
    const leftShipContainer = game.leftPlayer.ships.container;
    const rightShipContainer = game.rightPlayer.ships.container;
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
      gameboardTwo: players.playerTwo().attachGameboard(obj.gameboardSize),
    };
    const createGameboardEl = function (gameboard) {
      const gridContainer = document.createElement('div');
      gridContainer.style.gridTemplateRows = `repeat(${obj.gameboardSize}, 1fr)`;
      gridContainer.style.gridTemplateColumns = `repeat(${obj.gameboardSize}, 1fr)`;
      for (let key of Object.keys(gameboard.squares)) {
        const squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.dataset.id = [`${key}`];
        gridContainer.append(squareEl);
        gridContainer.style.height = `100%`;
        gridContainer.style.width = `100%`;
      }

      return gridContainer;
    };

    leftContainer.append(createGameboardEl(gameboards.gameboardOne));
    rightContainer.append(createGameboardEl(gameboards.gameboardTwo));
    showElement(gameContainer);
    const square = document.querySelector(`[data-id="0,0"]`);
    leftShipContainer.setProperty('base-size-prop', `${square.offsetHeight}px`);
  };
  // UTILITY FUNCTIONS
  const hideElement = function (container) {
    container.classList.add('hide');
  };
  const showElement = function (container) {
    container.classList.remove('hide');
  };
})();
