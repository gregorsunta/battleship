import Gameboard from '../components/gameboard.js';
import Ships from '../components/ship.js';

test('check if grid is created correctly', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();

  expect(Gameboard1.squares[`1,1`].occupies).toBeNull();
  expect(Gameboard1.squares[`1,1`].isHit).toStrictEqual(false);
  //should i test every square?
});
test('check if the ship is correctly placed vertically', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  Gameboard1.placeShip('destroyer', `1,1`);

  expect(Gameboard1.squares[`1,1`].occupies).toStrictEqual(
    Gameboard1.ships.destroyer,
  );
  expect(Gameboard1.squares[`1,2`].occupies).toStrictEqual(
    Gameboard1.ships.destroyer,
  );
});
test('check if the destroyer is correctly placed horizontally', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  Gameboard1.placeShip('destroyer', `8,1`, 'h');

  expect(Gameboard1.squares[`8,1`].occupies).toStrictEqual(
    Gameboard1.ships['destroyer'],
  );
  expect(Gameboard1.squares[`9,1`].occupies).toStrictEqual(
    Gameboard1.ships['destroyer'],
  );
});
test("check if the carrier is not placed when a square's out of bounds", () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  Gameboard1.placeShip('carrier', `6,1`, 'h');

  expect(Gameboard1.squares[`6,1`].occupies).toBeNull();
  expect(Gameboard1.squares[`9,1`].occupies).toBeNull();
});
test('check if the gameboard correctly receives an attack', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  Gameboard1.placeShip('destroyer', `1,1`);

  expect(Gameboard1.receiveAttack(`1,1`)).toStrictEqual(
    Gameboard1.ships['destroyer'],
  );
  expect(Gameboard1.receiveAttack(`5,5`)).toStrictEqual(null);
  expect(Gameboard1.ships['destroyer'].hits).toStrictEqual(1);
});
test('check if the gameboard correctly calculates if all ships sunk', () => {
  const Gameboard1 = new Gameboard();
  Gameboard1.createBoard();
  Gameboard1.placeShip('destroyer', `1,1`);

  expect(Gameboard1.receiveAttack(`1,1`)).toStrictEqual(
    Gameboard1.ships['destroyer'],
  );
  expect(Gameboard1.areShipsSunk()).toStrictEqual(false);
  expect(Gameboard1.receiveAttack(`1,2`)).toStrictEqual(
    Gameboard1.ships['destroyer'],
  );
  expect(Gameboard1.areShipsSunk()).toStrictEqual(true);
});
