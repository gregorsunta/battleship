import Ships from '../components/ship.js';
const newShips = new Ships();

test('properly created ship', () => {
  expect(newShips.destroyer.start).toStrictEqual(undefined);
  expect(newShips.destroyer.orient).toStrictEqual('v');
  expect(newShips.destroyer.isSunk()).toStrictEqual(false);
  newShips.destroyer.hit();
  newShips.destroyer.hit();
  expect(newShips.destroyer.isSunk()).toStrictEqual(true);
});
// test('', () => {});
