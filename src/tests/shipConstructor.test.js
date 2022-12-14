import Ship from '../components/shipConstructor.js';

test('test isSunk return value', () => {
  const newShip = new Ship(2);
  newShip.hit();
  expect(newShip.isSunk()).toStrictEqual(false);
  newShip.hit();
  expect(newShip.isSunk()).toStrictEqual(true);
});
// test('', () => {});
