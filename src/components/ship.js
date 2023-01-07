'use strict';

const Ship = function (size, name) {
  return {
    size: size,
    name: name,
    // start: undefined,
    orient: 'v',
    hits: 0,
    placed: false,
    hit() {
      return ++this.hits;
    },
    isSunk() {
      if (this.size === this.hits) return true;
      else return false;
    },
  };
};
const Ships = function () {
  return {
    destroyer: new Ship(2, 'destroyer'),
    submarine: new Ship(3, 'submarine'),
    cruiser: new Ship(3, 'cruiser'),
    battleship: new Ship(4, 'battleship'),
    carrier: new Ship(5, 'carrier'),
  };
};
export default Ships;
