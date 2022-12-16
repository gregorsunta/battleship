import Player from '../components/player.js';

test('check if creating a new instance of player creates its own gameboard', () => {
  const player = new Player();
  expect(player.attachGameboard()).toStrictEqual(player.Gameboard);
});
test('check if enemy ship receives attack', () => {
  const player1 = new Player();
  player1.attachGameboard();

  const player2 = new Player();
  player2.attachGameboard();
  player2.Gameboard.placeShip('destroyer', '1,1', 'v');

  player1.attack(player2, '1,1');

  expect(player2.Gameboard.squares['1,1'].isHit).toStrictEqual(true);
});
test('check if computer player makes move', () => {
  const player1 = new Player();
  player1.attachGameboard();

  const player2 = new Player();
  player2.attachGameboard();
  player2.Gameboard.placeShip('destroyer', '1,1', 'v');

  const occupies = player1.computerAttack(player1);

  expect(occupies).toStrictEqual(null || player2.Gameboard.ships['destroyer']);
});
