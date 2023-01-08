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
    checkPlacement,
    squares,
    ships,
    isOneShipPlaced: () => {
      return isOneShipPlaced;
    },
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
    computerPlaceShip(ship) {
      const gameboardSize = this.size;
      const randomNumber = (gameboardSize) => {
        return Math.floor(Math.random() * gameboardSize);
      };
      const randomPlacement = () => {
        const randomSquare = `${randomNumber(gameboardSize)},${randomNumber(
          gameboardSize,
        )}`;
        const shipOrientArr = ['v', 'h'];
        const randomOrient =
          shipOrientArr[Math.floor(Math.random() * shipOrientArr.length)];

        if (checkPlacement(randomSquare, ship, randomOrient).valid) {
          return [ship.name, randomSquare, randomOrient];
        } else {
          return randomPlacement();
        }
      };
      const random = randomPlacement();
      this.placeShip(...random);
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
        }
        return square.occupies;
      }
    },
    receiveComputerAttack() {
      const checkIfPossibleHit = () => {
        for (let [squareStr, value] of Object.entries(squares)) {
          if (value.isHit && value.occupies) {
            const square = squareStr.split(',');
            const directions = [
              [0, 1],
              [1, 0],
              [-1, 0],
              [0, -1],
            ];
            const createMove = function (squareString, direction) {
              console.log(squareString);
              const squareId = squareString.split(',');
              return [
                Number(squareId[0]) + Number(direction[0]),
                Number(squareId[1]) + Number(direction[1]),
              ];
            };
            for (let direction of directions) {
              let newPossibleTarget = createMove(
                square.join(','),
                direction,
              ).join(',');
              if (
                squares[newPossibleTarget]?.isHit === true &&
                squares[newPossibleTarget]?.occupies
              ) {
                newPossibleTarget = createMove(
                  newPossibleTarget,
                  direction,
                ).join(',');
                console.log(newPossibleTarget);
                // console.log(`${} ${}`);

                while (
                  squares[newPossibleTarget] &&
                  squares[newPossibleTarget]?.occupies
                ) {
                  if (squares[newPossibleTarget]?.isHit === false) {
                    return newPossibleTarget;
                  }
                  newPossibleTarget = createMove(
                    newPossibleTarget,
                    direction,
                  ).join(',');
                }
              }
            }
            for (let direction of directions) {
              let newPossibleTarget = createMove(
                square.join(','),
                direction,
              ).join(',');
              // console.log(newPossibleTarget);
              if (squares[newPossibleTarget]?.isHit === false) {
                return newPossibleTarget;
              }
            }
          }
        }
        return null;
      };
      const gameboardSize = this.size;
      const randomNumber = (gameboardSize) => {
        return Math.floor(Math.random() * gameboardSize);
      };
      const randomSquare = () => {
        const square = `${randomNumber(gameboardSize)},${randomNumber(
          gameboardSize,
        )}`;
        this.squares[square];
        if (this.squares[square]?.isHit === false) {
          return square;
        } else {
          return randomSquare();
        }
      };
      const possibleHit = checkIfPossibleHit();
      if (possibleHit) {
        return [this.receiveAttack(possibleHit), possibleHit];
      } else {
        const randomSq = randomSquare();
        return [this.receiveAttack(randomSq), randomSq];
      }
    },
  };
};

export default Gameboard;
