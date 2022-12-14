const Ship = function (size) {
  return {
    size: size,
    hits: 0,
    hit() {
      this.hits++;
    },
    isSunk() {
      if (this.size === this.hits) return true;
      else return false;
    },
  };
};

export default Ship;
