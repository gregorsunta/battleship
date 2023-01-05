'use strict';

import Gameboard from './gameboard.js';
import Ships from './ship.js';

const Player = function (name = 'Computer', isComputer = false, size) {
  const attachGameboard = function (size) {
    const gameboard = new Gameboard();
    gameboard.createBoard(size);
    return gameboard;
  };
  return {
    name: name,
    isComputer: isComputer,
    previousHit: false,
    gameboard: attachGameboard(size),
    attack(enemy, move) {
      return enemy.gameboard.receiveAttack(move);
    },
    computerAttack(enemy) {
      const gameboardSize = this.gameboard.size;
      const randomNumber = (gameboardSize) => {
        return Math.floor(Math.random() * gameboardSize);
      };
      const randomSquare = () => {
        const square = `${randomNumber(gameboardSize)},${randomNumber(
          gameboardSize,
        )}`;
        this.gameboard.squares[square];
        if (this.gameboard.squares[square]?.isHit === false) {
          return square;
        } else {
          return randomSquare();
        }
      };
      return enemy.gameboard.receiveAttack(randomSquare());
    },
    checkForLoss() {
      return this.gameboard.areShipsSunk();
    },
  };
};

export default Player;
