const Gameboard = function (size = 10) {
  return {
    squares: {},
    createBoard() {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          this.squares[`${[i, j]}`] = null;
        }
      }
    },
    placeShip(square, ship) {
      const squares = this.squares;
      const squareId = square.split(',').map((el) => Number(el));
      const shipSize = ship.size;
      const shipOrient = ship.orient;

      const isPlacementValid = function (start, ship) {
        if (shipOrient === 'v') {
          for (let i = 0; i < ship.size; i++) {
            const neighbourStr = [start[0], start[1] + i].join();
            if (squares[neighbourStr]) {
              return false;
            }
          }
          return true;
        }
        if (shipOrient === 'h') {
          for (let i = 0; i < ship.size; i++) {
            const neighbourStr = [start[0] + i, start[1]].join();
            if (squares[neighbourStr]) {
              return false;
            }
          }
          return true;
        }
      };

      if (isPlacementValid(squareId, ship)) {
        if (shipOrient === 'v') {
          for (let i = 0; i < shipSize; i++) {
            const neighbour = [squareId[0], squareId[1] + i];
            const neighbourStr = neighbour.join();
            squares[neighbourStr] = ship;
          }
        } else if (shipOrient === 'h') {
          for (let i = 0; i < shipSize; i++) {
            const neighbour = [squareId[0] + i, squareId[1]];

            const neighbourStr = neighbour.join();
            squares[neighbourStr] = ship;
          }
        }
      }
    },
  };
};

export default Gameboard;
