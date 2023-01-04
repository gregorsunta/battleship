'use strict';

import { form, game } from '/src/components/dom.js';
import Player from '/src/components/player.js';

const Gameloop = (function () {
  const processForm = function () {
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
          createGameComponents(getFormInput(players, options));
          form.container.reset();
          hideElement(form.container);
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
  };
  const createGameComponents = function (obj) {
    const gameContainer = game.container;
    // const playerContainer = game.container.querySelector('.container.player');
    const createPlayerData = (obj) => {
      if (obj.computerOption) {
        return new Player('Computer', true, obj.gameboardSize);
      } else {
        return new Player(obj.name, false, obj.gameboardSize);
      }
    };
    const createGameElements = function (player) {
      const createGrid = () => {
        const grid = document.createElement('div');
        grid.style.gridTemplateRows = `repeat(${player.gameboard.size}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${player.gameboard.size}, 1fr)`;
        for (let key of Object.keys(player.gameboard.squares)) {
          const squareEl = document.createElement('div');
          squareEl.classList.add('square');
          squareEl.dataset.id = [`${key}`];
          squareEl.dataset.owner = [`${player.name}`];
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
          shipEl.dataset.owner = `${player.name}`;
          ships.append(shipEl);
        }
        ships.classList.add('ships', 'hide');
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
    const data = createPlayerData(obj);
    const elements = createGameElements(data);

    showElement(gameContainer);
    // setBaseUnitSize();
    return { data, elements };
  };
  const enableShipPlacement = function (player) {
    const data = player.data;
    const elements = player.elements;
    player.elements.shipContainer.classList.remove('hide');
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
          const ship =
            data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          const squareStr = e.target.dataset.id;
          const status = data.gameboard.checkPlacement(squareStr, ship, 'v');
          for (let squareStr of status.elements) {
            const squareEl = elements.gridContainer.querySelector(
              `[data-id="${squareStr}"]`,
            );
            if (status.valid) {
              squareEl.classList.add('place');
            } else {
              squareEl.classList.add('invalid-place');
            }
            // square.classList.add('hover');
          }
        });
        square.addEventListener('dragleave', (e) => {
          e.preventDefault();
          const ship =
            data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          const squareStr = e.target.dataset.id;
          const selectedSquares = data.gameboard.checkPlacement(
            squareStr,
            ship,
            'v',
          ).elements;
          for (let squareStr of selectedSquares) {
            const squareEl = elements.gridContainer.querySelector(
              `[data-id="${squareStr}"]`,
            );
            squareEl.classList.remove('place');
            squareEl.classList.remove('invalid-place');
          }
        });
        square.addEventListener('drop', (e) => {
          e.preventDefault();
          const ship =
            data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          const squareStr = e.target.dataset.id;
          const status = data.gameboard.checkPlacement(squareStr, ship, 'v');
          if (status.valid) {
            for (let squareStr of status.elements) {
              const squareEl = elements.gridContainer.querySelector(
                `[data-id="${squareStr}"]`,
              );
              squareEl.classList.remove('place');
              squareEl.classList.add('placed');
              data.gameboard.placeShip(
                e.dataTransfer.mozSourceNode.dataset.type,
                squareStr,
              );
              e.dataTransfer.mozSourceNode.setAttribute('draggable', false);
              e.dataTransfer.mozSourceNode.classList.add('used');
            }
          } else {
            for (let squareStr of status.elements) {
              const squareEl = elements.gridContainer.querySelector(
                `[data-id="${squareStr}"]`,
              );
              squareEl.classList.remove('invalid-place');
            }
          }
        });
      }
    };
    enableDraggable(elements.shipContainer.querySelectorAll('.ship'));
    addShipEventListener(elements.shipContainer.querySelectorAll('.ship'));
    addGridEventListener(elements.gridContainer.querySelectorAll('.square'));
  };
  const disableShipPlacement = function (player) {
    player.elements.shipContainer.classList.add('hide');
    // hide ships
    // removeeventlistener from all squares
    const squares = player.elements.gridContainer.childNodes;
    for (let square of squares) {
      const oldSquare = square;
      const newSquare = oldSquare.cloneNode(true);
      oldSquare.parentNode.replaceChild(newSquare, oldSquare);
    }
  };
  const enableAttack = function (player, enemy) {};
  const hidePlacedShips = function (playerComponents) {
    const shipSquares =
      playerComponents.elements.gridContainer.querySelectorAll('.placed');
    for (let square in shipSquares) {
      square.classList.remove('placed');
    }
  };
  const showPlacedShips = function (playerComponents) {
    const squaresData = playerComponents.data.gameboard.squares;
    const squaresElements = playerComponents.elements.gridContainers.childNodes;
    for (let square of squaresData) {
      if (square.occupies) {
        squaresElements.querySelector(`[data-id="${square}"]`);
      }
    }
  };
  // const changeTurn = function (curActivePlayer, curInactivePlayer) {};
  const hideElement = function (container) {
    container.classList.add('hide');
  };
  const showElement = function (container) {
    container.classList.remove('hide');
  };
  /* loop */
  processForm();
  hideElement(form.container);
  const customLeftObj = {
    leftName: 'Gregor',
    computerOption: false,
    gameboardSize: '13',
  };
  const customRightObj = {
    rightName: '',
    computerOption: true,
    gameboardSize: '7',
  };
  const left = game.leftPlayer;
  const right = game.rightPlayer;
  const playerComponentsLeft = createGameComponents(customLeftObj);
  const playerComponentsRight = createGameComponents(customRightObj);
  left.gameboard.append(playerComponentsLeft.elements.gridContainer);
  left.ships.append(playerComponentsLeft.elements.shipContainer);
  right.gameboard.append(playerComponentsRight.elements.gridContainer);
  right.ships.append(playerComponentsRight.elements.shipContainer);

  let curActivePlayer = playerComponentsLeft;
  let curInactivePlayer = playerComponentsRight;
  const phases = {
    formProcessing: 1,
    shipPlacement: 2,
    playing: 3,
    win: 4,
  };
  let phase = phases.shipPlacement;
  const changeActivePlayer = function () {
    const temp = curActivePlayer;
    curActivePlayer = curInactivePlayer;
    curInactivePlayer = temp;
  };
  enableShipPlacement(playerComponentsLeft);
  game.button.addEventListener('click', (e) => {
    if (phase === 2) {
      const shipReqOne = curActivePlayer.data.gameboard.isOneShipPlaced();
      const shipReqTwo = curInactivePlayer.data.gameboard.isOneShipPlaced();
      if (shipReqOne && shipReqTwo) {
        disableShipPlacement(curActivePlayer);
        phase = phases.playing;
      } else if (shipReqOne || shipReqTwo) {
        console.log('here');
        const temp = curActivePlayer;
        curActivePlayer = curInactivePlayer;
        curInactivePlayer = temp;
        disableShipPlacement(curInactivePlayer);
        enableShipPlacement(curActivePlayer);
      }
    } else if (phase === 3) {
      console.log('phase 3 came');
    }
  });
  // enableShipPlacement(gameComponentsRight);
  // disableShipPlacement(gameComponentsLeft);
  return {
    createGameComponents,
    processForm,
    enableShipPlacement,
    hideElement,
    showElement,
    // enableAttack,
  };
})();

export default Gameloop;
