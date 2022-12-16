import Gameboard from './gameboard';
import Ships from './ship';

const Player = function (isComputer = false) {
  return {
    isComputer: isComputer,
    previousHit: false,
    attachGameboard(size) {
      this.Gameboard = new Gameboard();
      this.Gameboard.createBoard(size);
      return this.Gameboard;
    },
    createRandomMove(gameBoardSize) {
      const randomNumber = () => {
        return Math.floor(Math.random() * (gameBoardSize - 0) + 0);
      };
      return [randomNumber(), randomNumber()];
    },
    attack(enemy, move) {
      if (isComputer) {
        const occupies = enemy.Gameboard.receiveAttack(randomMove);
        while (enemy.Gameboard.squares[move].isHit) {
          const randomMove = createRandomMove(this.Gameboard.size);
          occupies = enemy.Gameboard.receiveAttack(randomMove);
        }
        return;
      } else {
        return enemy.Gameboard.receiveAttack(move);
      }
    },
  };
};

export default Player;
