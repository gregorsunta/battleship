'use strict';
import Ships from './ship.js';

const Gameboard = function () {
  const squares = {};
  const ships = new Ships();
  const checkPlacement = function (start, ship, shipOrient) {
    if (ship.placed) {
      return {
        elements: null,
        valid: false,
      };
    }
    if (shipOrient === 'v') {
      const elements = [];
      for (let i = 0; i < ship.size; i++) {
        const neighbourStr = [start[0], start[1] + i].join();
        elements.push(neighbourStr);
        if (!squares[neighbourStr]) {
          return {
            elements,
            valid: false,
          };
        } else if (squares[neighbourStr]?.occupies) {
          return {
            elements,
            valid: false,
          };
        }
      }
      return {
        elements,
        valid: true,
      };
    }
    if (shipOrient === 'h') {
      const elements = [];
      for (let i = 0; i < ship.size; i++) {
        const neighbourStr = [start[0] + i, start[1]].join();
        elements.push(neighbourStr);
        if (!squares[neighbourStr]) {
          return {
            elements,
            valid: false,
          };
        } else if (squares[neighbourStr]?.occupies) {
          return {
            elements,
            valid: false,
          };
        }
      }
      return {
        elements,
        valid: true,
      };
    }
  };
  const placeShipVertically = function (square, ship) {
    const selectedSquares = [];
    for (let i = 0; i < ship.size; i++) {
      const neighbour = [square[0], square[1] + i];
      const neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  const placeShipHorizontally = function (square, ship) {
    const selectedSquares = [];
    for (let i = 0; i < ship.size; i++) {
      const neighbour = [square[0] + i, square[1]];
      const neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  return {
    checkPlacement,
    squares,
    ships,
    createBoard(size = 10) {
      this.size = size;
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          this.squares[`${[j, i]}`] = {
            isHit: false,
            occupies: null,
          };
        }
      }
      return this.squares;
    },
    placeShip(shipName, squareStr, newOrient = 'v') {
      const ship = this.ships[shipName];
      const squareId = squareStr.split(',').map((el) => Number(el));
      const shipOrient = newOrient;
      if (checkPlacement(squareId, ship, newOrient)?.valid) {
        if (shipOrient === 'v') {
          ship.placed = true;
          return placeShipVertically(squareId, ship, shipOrient);
        } else if (shipOrient === 'h') {
          ship.placed = true;
          return placeShipHorizontally(squareId, ship, shipOrient);
        }
      } else {
        return null;
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
