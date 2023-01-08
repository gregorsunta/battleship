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

      if (leftPlayerValid && rightPlayerValid) {
        hideElement(formWindow.container);
        formData.leftPlayer = getFormInput(leftPlayer);
        formData.rightPlayer = getFormInput(rightPlayer);
        gameProperties.phase = phases.componentCreation;
        processPhase(gameProperties);
        formWindow.container.reset();
        togglePlayerInput(leftPlayer);
        togglePlayerInput(rightPlayer);
      } else {
        if (!leftPlayerValid) {
          displayError(leftPlayer);
        }
        if (!rightPlayerValid) {
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
      if (player.name.input.validity.valueMissing) {
        showError(player.name.error, 'A name is required.');
      }
    };
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
  const removePlayerComponents = function (playerComponents) {
    playerComponents?.elements.gridContainer.remove();
    playerComponents?.elements.shipContainer.remove();
    playerComponents?.elements.buttonContainer.remove();
  };
  const appendPlayerComponents = function (container, playerComponents) {
    container.gameboard.append(playerComponents.elements.gridContainer);
    container.ships.append(playerComponents.elements.shipContainer);
    container.rotationButton.append(playerComponents.elements.buttonContainer);
  };
  const switchActivePlayer = function (gamePropertiesArg) {
    const temp = gameProperties.activeComponents;
    gameProperties.activeComponents = gameProperties.inactiveComponents;
    gameProperties.inactiveComponents = temp;
  };
  const processPhase = function (gamePropertiesArg) {
    const gameProperties = gamePropertiesArg;
    const gameElements = gameWindow;
    if (gameProperties.phase === 0) {
      removePlayerComponents(gameProperties.activeComponents);
      removePlayerComponents(gameProperties.inactiveComponents);
      hideElement(gameWindow.container);
      showElement(formWindow.container);
      processForm();
    } else if (gameProperties.phase === 1) {
      gameWindow.leftPlayer.name.textContent = formData.leftPlayer.name;
      gameWindow.rightPlayer.name.textContent = formData.rightPlayer.name;
      gameProperties.activeComponents = new PlayerComponents(
        formData.leftPlayer,
      );
      gameProperties.inactiveComponents = new PlayerComponents(
        formData.rightPlayer,
      );
      appendPlayerComponents(
        gameElements.leftPlayer,
        gameProperties.activeComponents,
      );
      appendPlayerComponents(
        gameElements.rightPlayer,
        gameProperties.inactiveComponents,
      );
      showElement(gameWindow.container);
      gameProperties.phase = phases.starting;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 2) {
      gameProperties.phase = phases.shipPlacement;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 3) {
      if (!gameProperties.activeComponents.isShipPlaced()) {
        gameProperties.activeComponents.unfadePlayer();
        gameProperties.inactiveComponents.fadePlayer();
        if (gameProperties.activeComponents.data.isComputer) {
          gameProperties.activeComponents.elements.shipContainer?.remove();
          gameProperties.activeComponents.elements.buttonContainer?.remove();
          return gameProperties.activeComponents.enableComputerPlacement();
        }
        return gameProperties.activeComponents.enableShipPlacement();
      } else if (!gameProperties.inactiveComponents.isShipPlaced()) {
        if (!gameProperties.inactiveComponents.data.isComputer) {
          gameProperties.activeComponents.hidePlacedShips();
        }
        switchActivePlayer(gameProperties);
        processPhase(gameProperties);
      } else {
        if (!gameProperties.inactiveComponents.data.isComputer) {
          gameProperties.activeComponents.hidePlacedShips();
        }
        if (
          gameProperties.inactiveComponents.data.isComputer &&
          gameProperties.activeComponents.data.isComputer
        ) {
          gameProperties.inactiveComponents.showPlacedShips();
          gameProperties.activeComponents.showPlacedShips();
        }
        gameProperties.activeComponents.elements.shipContainer?.remove();
        gameProperties.activeComponents.elements.buttonContainer?.remove();
        gameProperties.inactiveComponents.elements.shipContainer?.remove();
        gameProperties.inactiveComponents.elements.buttonContainer?.remove();
        gameProperties.activeComponents.unfadePlayer();
        gameProperties.inactiveComponents.unfadePlayer();
        gameProperties.phase = phases.playing;
        processPhase(gameProperties);
      }
    } else if (gameProperties.phase === 4) {
      if (gameProperties.inactiveComponents.data.checkForLoss()) {
        gameProperties.phase = phases.win;
        processPhase(gameProperties);
      }
      switchActivePlayer(gameProperties);
      gameProperties.activeComponents.fadePlayer();
      gameProperties.inactiveComponents.unfadePlayer();
      if (gameProperties.activeComponents.data.isComputer) {
        gameProperties.inactiveComponents.enableReceivingComputerAttack();
      } else {
        gameProperties.inactiveComponents.enableReceivingAttack();
      }
      changeMessage().turn(gameProperties.activeComponents);
    } else if (gameProperties.phase === 5) {
      gameProperties.activeComponents.unfadePlayer();
      gameProperties.activeComponents.markWinner();
      gameProperties.activeComponents.showPlacedShips();
      gameProperties.inactiveComponents.showPlacedShips();
      changeMessage().win(gameProperties.activeComponents);
      gameProperties.phase = phases.formProcessing;
    }
  };

  /* INITIALIZATIN */

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
})();

export default Gameloop;
