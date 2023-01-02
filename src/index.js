import './components/gameloop.js';
import './stylesheets/style.scss';
import Gameloop from './components/gameloop.js';

const customObj = {
  firstName: 'Gregor',
  secondName: '',
  computerOption: true,
  gameboardSize: '10',
};
Gameloop.initiateGame(customObj);
// Gameloop.enableShipPlacement();
