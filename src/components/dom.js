'use strict';

export { form, game };

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
    leftContainer: container.querySelector('.left.container'),
    rightContainer: container.querySelector('.right.container'),
    leftShipContainer: {
      container: container.querySelector('.container.ship'),
      destroyer: 'destroyer',
      submarine: 'submarine',
      cruiser: 'cruiser',
      battleship: 'battleship',
      carrier: 'carrier',
    },
    rightShipContainer: {
      container: container.querySelector('.container.ship'),
      destroyer: 'destroyer',
      submarine: 'submarine',
      cruiser: 'cruiser',
      battleship: 'battleship',
      carrier: 'carrier',
    },
  };
})();
