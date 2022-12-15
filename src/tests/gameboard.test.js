import Gameboard from '../components/gameboard.js';
import Ships from '../components/ship.js';

test('check if grid is created correctly', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();

  expect(Gameboard1.squares[`1,1`]).toBeNull();
  //should i test every square?
});
test('check if the ship is correctly placed vertically', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  const newShips = new Ships();
  Gameboard1.placeShip(`1,1`, newShips.destroyer);

  expect(Gameboard1.squares[`1,1`]).toStrictEqual(newShips.destroyer);
  expect(Gameboard1.squares[`1,2`]).toStrictEqual(newShips.destroyer);
});
test('check if the destroyer is correctly placed horizontally', () => {
  const Gameboard1 = new Gameboard();
  const newShips = new Ships();
  Gameboard1.createBoard();
  newShips.destroyer.orient = 'h';
  Gameboard1.placeShip(`8,1`, newShips.destroyer);

  expect(Gameboard1.squares[`8,1`]).toStrictEqual(newShips.destroyer);
  expect(Gameboard1.squares[`9,1`]).toStrictEqual(newShips.destroyer);
});
test("check if the carrier is not placed when a square's out of bounds", () => {
  const Gameboard1 = new Gameboard();
  const newShips = new Ships();
  Gameboard1.createBoard();
  newShips.carrier.orient = 'h';
  Gameboard1.placeShip(`6,1`, newShips.carrier);

  expect(Gameboard1.squares[`6,1`]).toBeNull();
  expect(Gameboard1.squares[`9,1`]).toBeNull();
});
test('check if the gameboard correctly receives an attack', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  const newShips = new Ships();
  Gameboard1.placeShip(`1,1`, newShips.destroyer);

  expect(Gameboard1.receiveAttack(`1,1`)).toStrictEqual(1);
  expect(Gameboard1.receiveAttack(`5,5`)).toStrictEqual('hit');
  expect(newShips.destroyer.hits).toStrictEqual(1);
});
test('check if the gameboard correctly calculates if all ships sunk', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  const newShips = new Ships();
  Gameboard1.placeShip(`1,1`, newShips.destroyer);

  expect(Gameboard1.receiveAttack(`1,1`)).toStrictEqual(1);
  expect(Gameboard1.areShipsSunk()).toStrictEqual(false);
  expect(Gameboard1.receiveAttack(`1,2`)).toStrictEqual(2);
  expect(Gameboard1.areShipsSunk()).toStrictEqual(true);
});
