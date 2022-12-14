'use strict';

export { form, game, message };

const form = (function () {
  const container = document.querySelector('.name.input.container');
  return {
    container,
    button: container.querySelector('button'),
    leftPlayer: {
      container: container.querySelector('.player.left.container'),
      name: {
        container: container.querySelector('.left > .name'),
        input: container.querySelector('.left > .name > input'),
        error: container.querySelector('.left .error'),
      },
      computer: {
        container: container.querySelector('.left > .computer'),
        input: container.querySelector('.left > .computer > input'),
      },
      size: {
        container: container.querySelector('.left > .size'),
        input: container.querySelector('.left > .size > input'),
        output: container.querySelector('.left > .size > output'),
      },
    },
    rightPlayer: {
      container: container.querySelector('.player.right.container'),
      name: {
        container: container.querySelector('.right > .name'),
        input: container.querySelector('.right > .name > input'),
        error: container.querySelector('.right .error'),
      },
      computer: {
        container: container.querySelector('.right > .computer'),
        input: container.querySelector('.right > .computer > input'),
      },
      size: {
        container: container.querySelector('.right > .size'),
        input: container.querySelector('.right > .size > input'),
        output: container.querySelector('.right > .size > output'),
      },
    },
  };
})();
const game = (function () {
  const container = document.querySelector('.game.container');
  return {
    container,
    leftPlayer: {
      name: container.querySelector('.left .name'),
      container: container.querySelector('.left.player'),
      gameboard: container.querySelector('.left .gameboard.container'),
      ships: container.querySelector('.left .ships.container'),
      rotationButton: container.querySelector('.left .rotation'),
    },
    continueButton: container.querySelector('button.continue'),
    rightPlayer: {
      name: container.querySelector('.right .name'),
      container: container.querySelector('.right.player'),
      gameboard: container.querySelector('.right .gameboard.container'),
      ships: container.querySelector('.right .ships.container'),
      rotationButton: container.querySelector('.right .rotation'),
    },
  };
})();
const message = (function () {
  const container = document.querySelector('.message.container');
  return {
    container,
  };
})();
// const orientationButton = (function () {
// const button = document.querySelector('button.orientation');
// return button;
// })();
