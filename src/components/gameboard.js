'use strict';
import Ships from './ship.js';

const Gameboard = function () {
  const squares = {};
  const ships = new Ships();
  let isOneShipPlaced = false;
  const checkPlacement = function (squareStr, shipData, shipOrient = 'v') {
    const squareId = squareStr.split(',').map((el) => Number(el));
    if (shipData.placed) {
      return {
        elements: null,
        valid: false,
      };
    }
    if (shipOrient === 'v') {
      const elements = [];
      for (let i = 0; i < shipData.size; i++) {
        const neighbourStr = [squareId[0], squareId[1] + i].join();
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
      for (let i = 0; i < shipData.size; i++) {
        const neighbourStr = [squareId[0] + i, squareId[1]].join();
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
    return 'banana';
  };
  const placeShipVertically = function (squareStr, ship) {
    isOneShipPlaced = true;
    const squareId = squareStr.split(',').map((el) => Number(el));
    const selectedSquares = [];
    for (let i = 0; i < ship.size; i++) {
      const neighbour = [squareId[0], squareId[1] + i];
      const neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  const placeShipHorizontally = function (squareStr, ship) {
    isOneShipPlaced = true;
    const squareId = squareStr.split(',').map((el) => Number(el));
    const selectedSquares = [];
    for (let i = 0; i < ship.size; i++) {
      const neighbour = [squareId[0] + i, squareId[1]];
      const neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  return {
    isOneShipPlaced: () => {
      return isOneShipPlaced;
    },
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
      if (checkPlacement(squareStr, ship, newOrient)?.valid) {
        if (shipOrient === 'v') {
          ship.placed = true;
          return placeShipVertically(squareStr, ship, shipOrient);
        } else if (shipOrient === 'h') {
          ship.placed = true;
          return placeShipHorizontally(squareStr, ship, shipOrient);
        }
      } else {
        return null;
      }
    },
    areShipsSunk() {
      for (let ship of Object.keys(this.ships)) {
        if (!this.ships[ship].isSunk() && this.ships[ship].placed) {
          return false;
        }
      }
      return true;
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
          console.log(square.occupies);
        }
        return square.occupies;
      }
    },
  };
};

export default Gameboard;
