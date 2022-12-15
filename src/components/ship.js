const Ship = function (size) {
  return {
    size: size,
    start: undefined,
    orient: 'v',
    hits: 0,
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
    destroyer: new Ship(2),
    submarine: new Ship(3),
    cruiser: new Ship(3),
    battleship: new Ship(4),
    carrier: new Ship(5),
  };
};
export default Ships;
