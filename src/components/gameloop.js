'use strict';

import { form, game } from '/src/components/dom.js';
import Player from '/src/components/player.js';

const Gameloop = (function () {
  const processForm = (function () {
    const options = form.options;
    const players = form.players;
    const addFormEventListeners = () => {
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
    };
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
    addFormEventListeners();
  })();
  const initiateGame = function (obj) {
    const gameContainer = game.container;
    const leftPlayer = game.leftPlayer;
    const rightPlayer = game.rightPlayer;

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
    const createGameElements = function (gameboardData) {
      const createGrid = () => {
        const grid = document.createElement('div');
        grid.style.gridTemplateRows = `repeat(${obj.gameboardSize}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${obj.gameboardSize}, 1fr)`;
        for (let key of Object.keys(gameboardData.squares)) {
          const squareEl = document.createElement('div');
          squareEl.classList.add('square');
          squareEl.dataset.id = [`${key}`];
          grid.append(squareEl);
          grid.style.height = `100%`;
          grid.style.width = `100%`;
        }
        grid.classList.add('grid', 'container');
        return grid;
      };
      const createShips = () => {
        const ships = document.createElement('div');
        for (let key of Object.keys(gameboardData.ships)) {
          const shipEl = document.createElement('div');
          shipEl.classList.add('ship', `${key}`);
          ships.append(shipEl);
        }
        ships.classList.add('ships');
        return ships;
      };

      return { gridContainer: createGrid(), shipContainer: createShips() };
    };
    const setBaseUnitSize = () => {
      // make ship width the same as square width
      const squareHeight =
        document.querySelector(`[data-id="0,0"]`).offsetHeight;

      document.documentElement.style.setProperty(
        '--base-unit-size',
        `${squareHeight}px`,
      );
    };

    const leftElements = createGameElements(gameboards.gameboardOne);
    const rightElements = createGameElements(gameboards.gameboardTwo);

    leftPlayer.gameboard.append(leftElements.gridContainer);
    leftPlayer.ships.append(leftElements.shipContainer);
    rightPlayer.gameboard.append(rightElements.gridContainer);
    rightPlayer.ships.append(rightElements.shipContainer);

    hideElement(form.container);
    showElement(gameContainer);
    setBaseUnitSize();

    // showElement(document.querySelector(`[data-id="0,0"]`));
  };
  const enableShipPlacement = function () {
    const addShipEventListener = () => {
      const lShips = game.leftPlayer.ships;
      const rShips = game.rightPlayer.ships;
      const allShips = { lShips, rShips };
      for (let shipSelection of Object.values(allShips)) {
        console.log(shipSelection);
        for (let ship of Object.values(shipSelection)) {
          console.log(ship);
          ship.addEventListener('dragstart', (e) => {
            e.dataTransfer.dropEffect = 'copy';
          });
        }
      }
    };
    const addGridEventListener = () => {
      const lGrid = game.leftPlayer.gameboard.querySelector('.grid');
      const rGrid = game.rightPlayer.gameboard.querySelector('.grid');
      const allGrids = { lGrid, rGrid };
      for (let grid of allGrids) {
        for (let square of grid) {
          console.log(square);
          square.addEventListener('dragover', () => {
            console.log('here');
          });
        }
      }
    };
  };
  // UTILITY FUNCTIONS
  const hideElement = function (container) {
    container.classList.add('hide');
  };
  const showElement = function (container) {
    container.classList.remove('hide');
  };

  return { initiateGame, processForm, enableShipPlacement };
})();

export default Gameloop;
