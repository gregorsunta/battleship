import ships from './ship';

const Gameboard = function (size = 10) {
  return {
    createBoard() {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          this[`${[i, j]}`] = null;
        }
      }
    },
    placeShip(ship, square) {
      this[square] = ship;
    },
  };
};
export default Gameboard;
