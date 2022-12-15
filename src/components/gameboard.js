const Gameboard = function (size = 10) {
  return {
    squares: {},
    ships: [],
    createBoard() {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          this.squares[`${[i, j]}`] = null;
        }
      }
    },
    placeShip(squareStr, ship) {
      const shipsArr = this.ships;
      const squares = this.squares;
      const squareId = squareStr.split(',').map((el) => Number(el));
      const shipSize = ship.size;
      const shipOrient = ship.orient;

      const isPlacementValid = function (start, ship) {
        if (shipOrient === 'v') {
          for (let i = 0; i < ship.size; i++) {
            const neighbourStr = [start[0], start[1] + i].join();
            if (squares[neighbourStr] === undefined) {
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
        shipsArr.push(ship);
        for (let i = 0; i < shipSize; i++) {
          const neighbour = [squareId[0], squareId[1] + i];
          const neighbourStr = neighbour.join();
          squares[neighbourStr] = ship;
        }
      };
      const placeShipHorizontally = function () {
        shipsArr.push(ship);
        for (let i = 0; i < shipSize; i++) {
          const neighbour = [squareId[0] + i, squareId[1]];
          const neighbourStr = neighbour.join();
          squares[neighbourStr] = ship;
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
      return this.ships.every((ship) => ship.isSunk());
    },
    receiveAttack(squareStr) {
      const squareIdStr = squareStr;

      if (this.squares[squareIdStr] === undefined) {
        return `This attack is out of bounds`;
      } else if (this.squares[squareIdStr] === null) {
        return (this.squares[squareIdStr] = 'hit');
      } else if (this.squares[squareIdStr]) {
        return this.squares[squareIdStr].hit();
      }
      return Error`Conditions not met`;
    },
  };
};

export default Gameboard;
