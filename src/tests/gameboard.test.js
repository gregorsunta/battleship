import Gameboard from '../components/gameboard.js';
import Ships from '../components/ship.js';

const Gameboard1 = new Gameboard();
Gameboard1.createBoard();

test('check if grid is created correctly', () => {
  expect(Gameboard1.squares[`1,1`]).toStrictEqual(null);
  //should i test every square?
});
test('check if the ship is correctly placed vertically', () => {
  const newShips = new Ships();
  Gameboard1.placeShip(`1,1`, newShips.destroyer);
  expect(Gameboard1.squares[`1,1`]).toStrictEqual(newShips.destroyer);
  expect(Gameboard1.squares[`1,2`]).toStrictEqual(newShips.destroyer);
});
test('check if the ship is correctly placed horizontally', () => {
  const newShips = new Ships();
  newShips.destroyer.orient = 'h';
  Gameboard1.placeShip(`2,1`, newShips.destroyer);
  expect(Gameboard1.squares[`2,1`]).toStrictEqual(newShips.destroyer);
  expect(Gameboard1.squares[`3,1`]).toStrictEqual(newShips.destroyer);
});
