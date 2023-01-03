import './components/gameloop.js';
import './stylesheets/style.scss';
import Gameloop from './components/gameloop.js';

const customLeftObj = {
  leftName: 'Gregor',
  computerOption: false,
  gameboardSize: '10',
};
const customRightObj = {
  rightName: '',
  computerOption: true,
  gameboardSize: '10',
};
const game = Gameloop.initiateGame(customLeftObj, customRightObj);
Gameloop.enableShipPlacement(
  game.players.rightPlayer,
  game.elements.rightElements,
);
