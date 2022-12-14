import ships from '../components/ship.js';

test('properly created ship', () => {
  expect(ships.destroyer.start).toStrictEqual(undefined);
  expect(ships.destroyer.orient).toStrictEqual('v');
  expect(ships.destroyer.isSunk()).toStrictEqual(false);
  ships.destroyer.hit();
  ships.destroyer.hit();
  expect(ships.destroyer.isSunk()).toStrictEqual(true);
});
// test('', () => {});
