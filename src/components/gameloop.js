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
  const initiateGame = function (leftObj, rightObj) {
    const gameContainer = game.container;
    const leftPlayer = game.leftPlayer;
    const rightPlayer = game.rightPlayer;

    const players = createPlayers(leftObj, rightObj);

    const createGameElements = function (player) {
      const createGrid = () => {
        const grid = document.createElement('div');
        grid.style.gridTemplateRows = `repeat(${player.gameboard.size}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${player.gameboard.size}, 1fr)`;
        for (let key of Object.keys(player.gameboard.squares)) {
          const squareEl = document.createElement('div');
          squareEl.classList.add('square');
          squareEl.dataset.id = [`${key}`];
          squareEl.dataset.owner = [`${player.player.name}`];
          grid.append(squareEl);
          grid.style.height = `100%`;
          grid.style.width = `100%`;
        }
        grid.classList.add('grid', 'container');
        return grid;
      };
      const createShips = () => {
        const ships = document.createElement('div');
        for (let key of Object.keys(player.gameboard.ships)) {
          const shipEl = document.createElement('div');
          shipEl.classList.add('ship', `${key}`);
          shipEl.dataset.type = `${key}`;
          shipEl.dataset.owner = `${player.player.name}`;
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
    const leftElements = createGameElements(players.leftPlayer);
    const rightElements = createGameElements(players.rightPlayer);
    const elements = { leftElements, rightElements };
    leftPlayer.gameboard.append(leftElements.gridContainer);
    leftPlayer.ships.append(leftElements.shipContainer);
    rightPlayer.gameboard.append(rightElements.gridContainer);
    rightPlayer.ships.append(rightElements.shipContainer);

    hideElement(form.container);
    showElement(gameContainer);
    setBaseUnitSize();
    return { players, elements };
    // showElement(document.querySelector(`[data-id="0,0"]`));
  };
  const enableShipPlacement = function (selectedPlayer, playerElements) {
    const player = selectedPlayer;
    const elements = playerElements;
    const enableDraggable = function (shipList) {
      for (let ship of Object.values(shipList)) {
        ship.setAttribute('draggable', true);
      }
    };
    const addShipEventListener = (shipList) => {
      const ships = shipList;
      for (let ship of Object.values(ships)) {
        ship.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/html', `${e.target}`);
        });
      }
    };
    const addGridEventListener = (squareList) => {
      const grid = squareList;
      for (let square of Object.values(grid)) {
        square.addEventListener('dragover', (e) => {
          e.preventDefault();
        });
        square.addEventListener('dragenter', (e) => {
          e.preventDefault();
          e.target.classList.add('hover');
        });
        square.addEventListener('dragleave', (e) => {
          e.preventDefault();
          e.target.classList.remove('hover');
        });
        square.addEventListener('drop', (e) => {
          e.target.classList.remove('hover');
          e.preventDefault();
          const selectedSquares = player.gameboard.placeShip(
            e.dataTransfer.mozSourceNode.dataset.type,
            square.dataset.id,
          );
          if (selectedSquares) {
            e.dataTransfer.mozSourceNode.classList.add('placed');
            e.dataTransfer.mozSourceNode.setAttribute('draggable', false);
            for (let squareStr of selectedSquares) {
              elements.gridContainer
                .querySelector(`[data-id="${squareStr}"]`)
                .classList.add('checked');
            }
            e.target.classList.add('checked');
          } else {
            // show some error
          }
        });
      }
    };
    enableDraggable(elements.shipContainer.querySelectorAll('.ship'));
    addShipEventListener(elements.shipContainer.querySelectorAll('.ship'));
    addGridEventListener(elements.gridContainer.querySelectorAll('.square'));
  };
  // UTILITY FUNCTIONS
  const hideElement = function (container) {
    container.classList.add('hide');
  };
  const showElement = function (container) {
    container.classList.remove('hide');
  };
  const createPlayer = (obj) => {
    if (obj.computerOption) {
      return new Player('Computer', true);
    } else {
      return new Player(obj.name, false);
    }
  };
  const createPlayers = function (leftObj, rightObj) {
    const leftPlayer = createPlayer(leftObj);
    const rightPlayer = createPlayer(rightObj);
    return {
      leftPlayer: {
        player: leftPlayer,
        gameboard: leftPlayer.attachGameboard(leftObj.gameboardSize),
      },
      rightPlayer: {
        player: rightPlayer,
        gameboard: leftPlayer.attachGameboard(rightObj.gameboardSize),
      },
    };
  };
  return { initiateGame, processForm, enableShipPlacement };
})();

export default Gameloop;
