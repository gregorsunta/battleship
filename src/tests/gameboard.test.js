import Gameboard from '../components/gameboard.js';
import ships from '../components/ship.js';

const Gameboard1 = new Gameboard();
Gameboard1.createBoard();

test('grid creation', () => {
  expect(Gameboard1[`1,1`]).toStrictEqual(null);
});
test('ship placement', () => {
  Gameboard1.placeShip(ships.destroyer, `1,1`);
  expect(Gameboard1[`1,1`]).toStrictEqual(ships.destroyer);
});
