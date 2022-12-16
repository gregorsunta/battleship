import Ships from './ship.js';

const Gameboard = function () {
  return {
    squares: {},
    ships: new Ships(),
    createBoard(size = 10) {
      this.size = size;
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          this.squares[`${[i, j]}`] = {
            isHit: false,
            occupies: null,
          };
        }
      }
      return this.squares;
    },
    placeShip(shipName, squareStr, newOrient = 'v') {
      const ship = this.ships[shipName];
      const squares = this.squares;
      const squareId = squareStr.split(',').map((el) => Number(el));
      const shipSize = ship.size;
      const shipOrient = (ship.orient = newOrient);

      const isPlacementValid = function (start, ship) {
        if (shipOrient === 'v') {
          for (let i = 0; i < ship.size; i++) {
            const neighbourStr = [start[0], start[1] + i].join();
            if (!squares[neighbourStr]) {
              return false;
            }
          }
          return true;
        }
        if (shipOrient === 'h') {
          for (let i = 0; i < ship.size; i++) {
            const neighbourStr = [start[0] + i, start[1]].join();
            if (squares[neighbourStr] === undefined) {
              return false;
            }
          }
          return true;
        }
      };
      const placeShipVertically = function () {
        for (let i = 0; i < shipSize; i++) {
          const neighbour = [squareId[0], squareId[1] + i];
          const neighbourStr = neighbour.join();
          squares[neighbourStr].occupies = ship;
        }
      };
      const placeShipHorizontally = function () {
        for (let i = 0; i < shipSize; i++) {
          const neighbour = [squareId[0] + i, squareId[1]];
          const neighbourStr = neighbour.join();
          squares[neighbourStr].occupies = ship;
        }
      };
      if (isPlacementValid(squareId, ship)) {
        if (shipOrient === 'v') {
          placeShipVertically(squareId, shipSize, squares);
        } else if (shipOrient === 'h') {
          placeShipHorizontally(squareId, shipSize, squares);
        }
      }
    },
    areShipsSunk() {
      for (let key of Object.keys(this.ships)) {
        if (!this.ships[key].isSunk()) {
          return false;
        }
        return true;
      }
    },
    receiveAttack(squareStr) {
      const squareIdStr = squareStr;
      const square = this.squares[squareIdStr];

      if (!square) {
        return `Out of bounds`;
      } else if (square.isHit) {
        return `Already hit`;
      } else {
        square.isHit = true;
        if (square.occupies) {
          square.occupies.hit();
        }
        return square.occupies;
      }
    },
  };
};

export default Gameboard;
