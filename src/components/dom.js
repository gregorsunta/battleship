'use strict';

export { form, game, message, orientationButton };

const form = (function () {
  const container = document.querySelector('.name.input.container');
  return {
    container,
    button: container.querySelector('button'),
    options: {
      optionComputer: {
        input: container.querySelector('.option.computer > input'),
      },
      optionSize: {
        input: container.querySelector('.option.size > input'),
        output: container.querySelector('output'),
      },
    },
    players: {
      playerOne: {
        container: container.querySelector('.name.input.one'),
        input: container.querySelector('.one > input'),
        error: container.querySelector('.one > .error'),
      },
      playerTwo: {
        container: container.querySelector('.name.input.two'),
        input: container.querySelector('.two > input'),
        error: container.querySelector('.two > .error'),
      },
    },
  };
})();
const game = (function () {
  const container = document.querySelector('.game.container');
  return {
    container,
    leftPlayer: {
      container: container.querySelector('.left.player'),
      gameboard: container.querySelector('.left .gameboard.container'),
      ships: container.querySelector('.left .ships.container'),
    },
    button: container.querySelector('button.continue'),
    rightPlayer: {
      container: container.querySelector('.right.player'),
      gameboard: container.querySelector('.right .gameboard.container'),
      ships: container.querySelector('.right .ships.container'),
    },
  };
})();
const message = (function () {
  const container = document.querySelector('.message.container');
  return {
    container,
  };
})();
const orientationButton = (function () {
  const button = document.querySelector('button.orientation');
  return button;
})();
