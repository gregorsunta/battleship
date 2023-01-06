'use strict';

import { form, game, message, orientationButton } from '/src/components/dom.js';
import Player from '/src/components/player.js';

const Gameloop = (function () {
  const formData = {};
  const processForm = function () {
    showElement(form.container);
    const leftPlayer = form.leftPlayer;
    const rightPlayer = form.rightPlayer;
    const togglePlayerInput = function (player) {
      if (player.computer.input.checked) {
        player.name.container.classList.add('fade');
        // player.size.container.classList.add('fade');
        player.name.input.disabled = true;
        player.name.input.value = '';
      } else {
        // player.size.container.classList.remove('fade');
        player.name.container.classList.remove('fade');
        player.name.input.disabled = false;
      }
    };
    leftPlayer.computer.input.addEventListener('input', (e) => {
      e.preventDefault();
      togglePlayerInput(leftPlayer);
    });
    rightPlayer.computer.input.addEventListener('input', (e) => {
      e.preventDefault();
      togglePlayerInput(rightPlayer);
    });
    leftPlayer.size.input.addEventListener('input', () => {
      displaySliderValue(leftPlayer);
    });
    rightPlayer.size.input.addEventListener('input', () => {
      displaySliderValue(rightPlayer);
    });
    form.button.addEventListener('click', (e) => {
      e.preventDefault();
      const leftPlayerValid = leftPlayer.name.input.validity.valid;
      const rightPlayerValid = rightPlayer.name.input.validity.valid;

      // hideElement(rightPlayer.name.error);
      // hideElement(leftPlayer.name.error);

      if (leftPlayerValid && rightPlayerValid) {
        hideElement(form.container);
        formData.leftPlayer = getFormInput(leftPlayer);
        formData.rightPlayer = getFormInput(rightPlayer);
        gameProperties.phase = phases.componentCreation;
        processPhase(gameProperties);
        form.container.reset();
      } else {
        if (leftPlayerValid) {
          displayError(leftPlayer);
        }
        if (rightPlayerValid) {
          displayError(rightPlayer);
        }
      }
    });
    const showError = function (errorContainer, msg) {
      errorContainer.classList.remove('hide');
      errorContainer.textContent = msg;
    };
    const displaySliderValue = function (player) {
      player.size.output.textContent = player.size.input.value;
    };
    const getFormInput = function (playerArg) {
      const player = playerArg;
      return {
        name: player.name.input.value,
        computer: player.computer.input.checked,
        size: player.size.input.value,
      };
    };
    const displayError = function (player) {
      if (player.input.validity.valueMissing) {
        showError(player.error, 'A name is required.');
      }
    };
    // addFormEventListeners();
  };
  const createGameComponents = function (obj) {
    const gameContainer = game.container;
    // const playerContainer = game.container.querySelector('.container.player');
    const createPlayerData = (obj) => {
      if (obj.computer) {
        return new Player(obj.name, true, obj.size);
      } else {
        return new Player(obj.name, false, obj.size);
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
        ships.classList.add('ships', 'container', 'hide');
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
    console.log(data);

    const elements = createGameElements(data);

    showElement(gameContainer);
    // setBaseUnitSize();
    return { data, elements };
  };
  const changeOrientation = function (button, gamePropertiesArg) {
    button.textContent = 'Vertical';
    button.addEventListener('click', () => {
      if (gamePropertiesArg.placementOrientation === 'v') {
        button.textContent = 'Horizontal';
        gamePropertiesArg.placementOrientation = 'h';
      } else {
        button.textContent = 'Vertical';
        gamePropertiesArg.placementOrientation = 'v';
      }
    });
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
          const orientation = gameProperties.placementOrientation;
          e.preventDefault();
          const ship =
            data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          const squareStr = e.target.dataset.id;
          const status = data.gameboard.checkPlacement(
            squareStr,
            ship,
            orientation,
          );
          for (let squareStr of status.elements) {
            const squareEl = elements.gridContainer.querySelector(
              `[data-id="${squareStr}"]`,
            );
            if (squareEl === null) {
            } else if (status.valid) {
              squareEl.classList.add('place');
            } else {
              squareEl.classList.add('invalid-place');
            }
            // square.classList.add('hover');
          }
        });
        square.addEventListener('dragleave', (e) => {
          const orientation = gameProperties.placementOrientation;
          e.preventDefault();
          const ship =
            data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          const squareStr = e.target.dataset.id;
          const selectedSquares = data.gameboard.checkPlacement(
            squareStr,
            ship,
            orientation,
          ).elements;
          for (let squareStr of selectedSquares) {
            const squareEl = elements.gridContainer.querySelector(
              `[data-id="${squareStr}"]`,
            );
            if (squareEl === null) {
            } else {
              squareEl.classList.remove('place');
              squareEl.classList.remove('invalid-place');
            }
          }
        });
        square.addEventListener('drop', (e) => {
          const orientation = gameProperties.placementOrientation;
          e.preventDefault();
          const ship =
            data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          const squareStr = e.target.dataset.id;
          const status = data.gameboard.checkPlacement(
            squareStr,
            ship,
            orientation,
          );
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
                orientation,
              );
              e.dataTransfer.mozSourceNode.setAttribute('draggable', false);
              e.dataTransfer.mozSourceNode.classList.add('used');
            }
          } else {
            for (let squareStr of status.elements) {
              const squareEl = elements.gridContainer.querySelector(
                `[data-id="${squareStr}"]`,
              );
              if (squareEl === null) {
              } else {
                squareEl.classList.remove('invalid-place');
              }
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
  const markWinner = function (player) {
    player.elements.gridContainer.classList.add('winner');
  };
  const enableAttackOn = function (playerArg, phaseArg = gameProperties) {
    const squareNodes = playerArg.elements.gridContainer.childNodes;
    const processAttack = function (attackResultArg, squareNode) {
      if (attackResultArg === null) {
        squareNode.classList.add('miss');
      } else if (attackResultArg) {
        squareNode.classList.add('hit');
        if (playerArg.data.checkForLoss()) {
          // showElement(message.container);
          disableAttackOn(playerArg);
          gameProperties.phase = phases.win;
          processPhase(gameProperties);
        }
      }
    };
    for (let squareNode of squareNodes) {
      squareNode.addEventListener('click', () => {
        const attackContent = playerArg.data.gameboard.receiveAttack(
          squareNode.dataset.id,
        );
        processAttack(attackContent, squareNode);
        disableAttackOn(playerArg);
      });
    }
  };
  const disableAttackOn = function (player) {
    const squareNodes = player.elements.gridContainer.childNodes;
    for (let squareNode of squareNodes) {
      const oldSquare = squareNode;
      const newSquare = oldSquare.cloneNode(true);
      oldSquare.parentNode.replaceChild(newSquare, oldSquare);
    }
  };
  const fadePLayer = function (player) {
    player.elements.gridContainer.classList.add('fade');
  };
  const unfadePlayer = function (player) {
    player.elements.gridContainer.classList.remove('fade');
  };
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
  const changeMessage = function (container = message.container) {
    const messageContainer = container;
    return {
      win: (player) => {
        messageContainer.textContent = `The winner is ${player.data.name}`;
      },
      turn: (player) => {
        messageContainer.textContent = `It is ${player.data.name}'s turn`;
      },
    };
  };
  const hideElement = function (container) {
    container.classList.add('hide');
  };
  const showElement = function (container) {
    container.classList.remove('hide');
  };
  const isShipPlaced = function (playerComponents) {
    return playerComponents?.data.gameboard.isOneShipPlaced();
  };
  const processPhase = function (gamePropertiesArg) {
    const gameData = gamePropertiesArg;
    const gameElements = game;
    if (gameData.phase === 0) {
      showElement(form.container);
      processForm();
    } else if (gameData.phase === 1) {
      console.log(formData);
      gameProperties.activeComponents = createGameComponents(
        formData.leftPlayer,
      );
      gameProperties.inactiveComponents = createGameComponents(
        formData.rightPlayer,
      );
      gameElements.leftPlayer.container.append(
        gameProperties.activeComponents.elements.gridContainer,
        gameProperties.activeComponents.elements.shipContainer,
      );
      gameElements.rightPlayer.container.append(
        gameProperties.inactiveComponents.elements.gridContainer,
        gameProperties.inactiveComponents.elements.shipContainer,
      );
      showElement(gamePropertiesArg.activeComponents.elements.gridContainer);
      showElement(gamePropertiesArg.inactiveComponents.elements.gridContainer);
    } else if (gameData.phase === 2) {
      enableShipPlacement(gameData.activeComponents);
      gameData.phase = phases.shipPlacement;
      processPhase(gameData);
    } else if (gameData.phase === 3) {
      if (
        isShipPlaced(gameData.activeComponents) &&
        isShipPlaced(gameData.inactiveComponents)
      ) {
        disableShipPlacement(gameData.activeComponents);
        gameData.phase = phases.playing;
        processPhase(gameData);
      } else if (
        isShipPlaced(gameData.activeComponents) ||
        isShipPlaced(gameData.inactiveComponents)
      ) {
        const temp = gameData.activeComponents;
        gameData.activeComponents = gameData.inactiveComponents;
        gameData.inactiveComponents = temp;
        disableShipPlacement(gameData.inactiveComponents);
        enableShipPlacement(gameData.activeComponents);
      }
    } else if (gameData.phase === 4) {
      const temp = gameData.activeComponents;
      gameData.activeComponents = gameData.inactiveComponents;
      gameData.inactiveComponents = temp;
      fadePLayer(gameData.activeComponents);
      unfadePlayer(gameData.inactiveComponents);
      enableAttackOn(gameData.inactiveComponents, gameData.activeComponents);
      changeMessage().turn(gameData.activeComponents);
      if (enableAttackOn.status) {
      }
    } else if (gameData.phase === 5) {
      unfadePlayer(gameData.activeComponents);
      markWinner(gameData.activeComponents);
      changeMessage().win(gameData.activeComponents);
      gameData.phase = phases.formProcessing;
    }
  };

  // initialization

  const customLeftObj = {
    name: 'Gregor',
    computerOption: false,
    gameboardSize: '13',
  };
  const customRightObj = {
    name: 'Computer',
    computerOption: true,
    gameboardSize: '7',
  };
  // const left = game.leftPlayer;
  // const right = game.rightPlayer;
  // const playerComponentsLeft = createGameComponents(customLeftObj);
  // const playerComponentsRight = createGameComponents(customRightObj);
  // left.gameboard.append(playerComponentsLeft.elements.gridContainer);
  // left.ships.append(playerComponentsLeft.elements.shipContainer);
  // right.gameboard.append(playerComponentsRight.elements.gridContainer);
  // right.ships.append(playerComponentsRight.elements.shipContainer);
  const phases = {
    formProcessing: 0,
    componentCreation: 1,
    starting: 2,
    shipPlacement: 3,
    playing: 4,
    win: 5,
  };
  const gameProperties = {
    phase: phases.formProcessing,
    placementOrientation: 'v',
    activeComponents: null,
    inactiveComponents: null,
  };
  processPhase(gameProperties);
  // processForm();
  // hideElement(form.container);

  // enableShipPlacement(gameProperties.activeComponents);
  // changeOrientation(orientationButton, gameProperties);
  game.button.addEventListener('click', (e) => {
    processPhase(gameProperties);
  });
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
