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
  expect(player2.Gameboard.squares['1,1'].occupies.hits).toStrictEqual(1);
});
test('check if computer player makes move', () => {
  const player1 = new Player();
  player1.attachGameboard();

  const player2 = new Player();
  player2.attachGameboard();
  player2.Gameboard.placeShip('carrier', '0,0', 'v');
  player2.Gameboard.placeShip('carrier', '1,0', 'v');
  player2.Gameboard.placeShip('carrier', '2,0', 'v');
  player2.Gameboard.placeShip('carrier', '3,0', 'v');
  player2.Gameboard.placeShip('carrier', '4,0', 'v');
  player2.Gameboard.placeShip('carrier', '5,0', 'v');
  player2.Gameboard.placeShip('carrier', '6,0', 'v');
  player2.Gameboard.placeShip('carrier', '7,0', 'v');
  player2.Gameboard.placeShip('carrier', '8,0', 'v');
  player2.Gameboard.placeShip('carrier', '9,0', 'v');
  player2.Gameboard.placeShip('carrier', '0,5', 'v');
  player2.Gameboard.placeShip('carrier', '1,5', 'v');
  player2.Gameboard.placeShip('carrier', '2,5', 'v');
  player2.Gameboard.placeShip('carrier', '3,5', 'v');
  player2.Gameboard.placeShip('carrier', '4,5', 'v');
  player2.Gameboard.placeShip('carrier', '5,5', 'v');
  player2.Gameboard.placeShip('carrier', '6,5', 'v');
  player2.Gameboard.placeShip('carrier', '7,5', 'v');
  player2.Gameboard.placeShip('carrier', '8,5', 'v');
  player2.Gameboard.placeShip('carrier', '9,5', 'v');

  const occupies = player1.computerAttack(player2);

  expect([null, player2.Gameboard.ships['carrier']]).toContain(occupies);
});
