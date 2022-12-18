import Gameboard from './gameboard.js';
import Ships from './ship.js';

const Player = function (name, isComputer = false) {
  return {
    name: name,
    isComputer: isComputer,
    previousHit: false,
    attachGameboard(size) {
      this.Gameboard = new Gameboard();
      this.Gameboard.createBoard(size);
      return this.Gameboard;
    },
    attack(enemy, move) {
      return enemy.Gameboard.receiveAttack(move);
    },
    computerAttack(enemy) {
      const gameboardSize = this.Gameboard.size;
      const randomNumber = (gameboardSize) => {
        return Math.floor(Math.random() * gameboardSize);
      };
      const randomSquare = () => {
        const square = `${randomNumber(gameboardSize)},${randomNumber(
          gameboardSize,
        )}`;
        this.Gameboard.squares[square];
        if (this.Gameboard.squares[square]?.isHit === false) {
          return square;
        } else {
          return randomSquare();
        }
      };
      return enemy.Gameboard.receiveAttack(randomSquare());
    },
  };
};

export default Player;
