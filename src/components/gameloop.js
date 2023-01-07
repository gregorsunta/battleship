'use strict';

import PlayerComponents from '/src/components/PlayerComponents.js';
import {
  form as formWindow,
  game as gameWindow,
  message as messageWindow,
} from '/src/components/dom.js';
import Player from '/src/components/player.js';
const Gameloop = (function () {
  const formData = {};
  const processForm = function () {
    showElement(formWindow.container);
    const leftPlayer = formWindow.leftPlayer;
    const rightPlayer = formWindow.rightPlayer;
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
    formWindow.button.addEventListener('click', (e) => {
      e.preventDefault();
      const leftPlayerValid = leftPlayer.name.input.validity.valid;
      const rightPlayerValid = rightPlayer.name.input.validity.valid;

      // hideElement(rightPlayer.name.error);
      // hideElement(leftPlayer.name.error);

      if (leftPlayerValid && rightPlayerValid) {
        hideElement(formWindow.container);
        formData.leftPlayer = getFormInput(leftPlayer);
        formData.rightPlayer = getFormInput(rightPlayer);
        gameProperties.phase = phases.componentCreation;
        processPhase(gameProperties);
        formWindow.container.reset();
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
  const setBaseUnitSize = () => {
    // make ship width the same as square width
    const squareHeight = document.querySelector(`[data-id="0,0"]`).offsetHeight;
    document.documentElement.style.setProperty(
      '--base-unit-size',
      `${squareHeight}px`,
    );
  };
  const changeMessage = function (container = messageWindow.container) {
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
  const processPhase = function (gamePropertiesArg) {
    const gameProperties = gamePropertiesArg;
    const gameElements = gameWindow;
    if (gameProperties.phase === 0) {
      gameProperties.activeComponents?.elements.gridContainer.remove();
      gameProperties.inactiveComponents?.elements.gridContainer.remove();
      gameProperties.activeComponents?.elements.shipContainer.remove();
      gameProperties.inactiveComponents?.elements.shipContainer.remove();
      hideElement(gameWindow.container);
      showElement(formWindow.container);
      processForm();
    } else if (gameProperties.phase === 1) {
      if (!gameProperties.activeComponents) {
        gameProperties.activeComponents = new PlayerComponents(
          formData.leftPlayer,
        );
        gameElements.leftPlayer.gameboard.append(
          gameProperties.activeComponents.elements.gridContainer,
        );
        gameElements.leftPlayer.ships.append(
          gameProperties.activeComponents.elements.shipContainer,
        );
        gameElements.leftPlayer.container.append(
          gameProperties.activeComponents.elements.buttonContainer,
        );
      }
      if (!gameProperties.inactiveComponents) {
        gameProperties.inactiveComponents = new PlayerComponents(
          formData.rightPlayer,
        );
        gameElements.rightPlayer.gameboard.append(
          gameProperties.inactiveComponents.elements.gridContainer,
        );
        gameElements.rightPlayer.ships.append(
          gameProperties.inactiveComponents.elements.shipContainer,
        );
        gameElements.rightPlayer.container.append(
          gameProperties.inactiveComponents.createRotationButton(),
        );
      }
      showElement(gameWindow.container);
      gameProperties.phase = phases.starting;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 2) {
      gameProperties.phase = phases.shipPlacement;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 3) {
      if (
        gameProperties.activeComponents.isShipPlaced() &&
        gameProperties.inactiveComponents.isShipPlaced()
      ) {
        gameProperties.activeComponents.disableShipPlacement();
        gameProperties.activeComponents.hidePlacedShips();
        gameProperties.phase = phases.playing;
        processPhase(gameProperties);
      } else if (
        gameProperties.activeComponents.isShipPlaced() ||
        gameProperties.inactiveComponents.isShipPlaced()
      ) {
        gameProperties.activeComponents.disableShipPlacement();
        gameProperties.activeComponents.hidePlacedShips();

        const temp = gameProperties.activeComponents;
        gameProperties.activeComponents = gameProperties.inactiveComponents;
        gameProperties.inactiveComponents = temp;

        gameProperties.activeComponents.unfadePlayer();
        gameProperties.activeComponents.enableShipPlacement();
      } else {
        gameProperties.inactiveComponents.fadePlayer();
        gameProperties.activeComponents.enableShipPlacement();
      }
    } else if (gameProperties.phase === 4) {
      const temp = gameProperties.activeComponents;
      gameProperties.activeComponents = gameProperties.inactiveComponents;
      gameProperties.inactiveComponents = temp;
      gameProperties.activeComponents.fadePlayer();
      gameProperties.inactiveComponents.unfadePlayer();
      gameProperties.inactiveComponents.enableReceivingAttack();
      changeMessage().turn(gameProperties.activeComponents);
      // if (enableReceivingAttack.status) {
      // }
    } else if (gameProperties.phase === 5) {
      gameProperties.activeComponents.unfadePlayer();
      gameProperties.activeComponents.markWinner();
      gameProperties.activeComponents.showPlacedShips();
      gameProperties.inactiveComponents.showPlacedShips();
      changeMessage().win(gameProperties.activeComponents);
      gameProperties.phase = phases.formProcessing;
    }
  };

  // initialization

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
  const skipFormPhase = function (gamePropertiesArg, formDataArg) {
    // const leftPlayerData = {}
    formDataArg.leftPlayer = {
      name: 'John',
      size: '8',
      computer: false,
    };
    formDataArg.rightPlayer = {
      name: 'Sarah',
      size: '12',
      computer: false,
    };
    gamePropertiesArg.phase = phases.componentCreation;
  };
  const skipToWinPhase = function (gamePropertiesArg) {
    gamePropertiesArg.phase = phases.win;
  };
  // skipFormPhase(gameProperties, formData);
  // processPhase(gameProperties);
  // skipToWinPhase(gameProperties);
  processPhase(gameProperties);
  gameWindow.continueButton.addEventListener('click', (e) => {
    processPhase(gameProperties);
  });
  return {
    PlayerComponents,
  };
})();

export default Gameloop;
