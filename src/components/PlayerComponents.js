import Player from '/src/components/player.js';

const PlayerComponents = function (obj) {
  let shipOrientation = 'v';
  const createPlayerData = (obj) => {
    if (obj.computer) {
      return new Player(obj.name, true, obj.size);
    } else {
      return new Player(obj.name, false, obj.size);
    }
  };
  const createGameElements = function (playerData) {
    const createGrid = () => {
      const grid = document.createElement('div');
      grid.style.gridTemplateRows = `repeat(${playerData.gameboard.size}, 1fr)`;
      grid.style.gridTemplateColumns = `repeat(${playerData.gameboard.size}, 1fr)`;
      for (let key of Object.keys(playerData.gameboard.squares)) {
        const squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.dataset.id = [`${key}`];
        squareEl.dataset.owner = [`${playerData.name}`];
        grid.append(squareEl);
        grid.style.height = `100%`;
        grid.style.width = `100%`;
      }
      grid.classList.add('grid', 'container');
      return grid;
    };
    const createShips = () => {
      const ships = document.createElement('div');
      for (let key of Object.keys(playerData.gameboard.ships)) {
        const shipEl = document.createElement('div');
        shipEl.classList.add('ship', `${key}`);
        shipEl.dataset.type = `${key}`;
        shipEl.dataset.owner = `${playerData.name}`;
        ships.append(shipEl);
      }
      ships.classList.add('ships', 'container');
      return ships;
    };
    const createRotationButton = function () {
      const button = document.createElement('button');
      button.classList.add('rotation');
      button.textContent = 'Vertical';
      button.addEventListener('click', () => {
        if (shipOrientation === 'v') {
          button.textContent = 'Horizontal';
          shipOrientation = 'h';
        } else if (shipOrientation === 'h') {
          button.textContent = 'Vertical';
          shipOrientation = 'v';
        }
      });
      return button;
    };
    return {
      gridContainer: createGrid(),
      shipContainer: createShips(),
      buttonContainer: createRotationButton(),
    };
  };
  const data = createPlayerData(obj);
  return {
    data: data,
    elements: createGameElements(data),
    markWinner() {
      this.elements.gridContainer.classList.add('winner');
    },
    enableShipPlacement() {
      const data = this.data;
      const elements = this.elements;
      const rotation = this.shipOrientation;
      elements.shipContainer.classList.remove('hide');
      const enableDraggable = function (shipList) {
        for (let ship of Object.values(shipList)) {
          ship.setAttribute('draggable', true);
        }
      };
      const addShipEventListener = (shipList) => {
        const ships = shipList;
        for (let ship of Object.values(ships)) {
          ship.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/html', `${e.target}`);
          });
        }
      };
      const addGridEventListener = (squareList) => {
        const grid = squareList;
        for (let square of Object.values(grid)) {
          square.addEventListener('dragover', (e) => {
            e.preventDefault();
            const ship =
              data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
            const squareStr = e.target.dataset.id;
            const status = data.gameboard.checkPlacement(
              squareStr,
              ship,
              shipOrientation,
            );
            for (let squareStr of status.elements) {
              const squareEl = elements.gridContainer.querySelector(
                `[data-id="${squareStr}"]`,
              );
              if (squareEl === null) {
              } else if (status.valid) {
                squareEl.classList.add('place');
              } else {
                squareEl.classList.add('invalid-place');
              }
            }
          });
          square.addEventListener('dragleave', (e) => {
            // const orientation = gameProperties.placementOrientation;
            e.preventDefault();
            const ship =
              data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
            const squareStr = e.target.dataset.id;
            const selectedSquares = data.gameboard.checkPlacement(
              squareStr,
              ship,
              shipOrientation,
            ).elements;
            for (let squareStr of selectedSquares) {
              const squareEl = elements.gridContainer.querySelector(
                `[data-id="${squareStr}"]`,
              );
              if (squareEl === null) {
              } else {
                squareEl.classList.remove('place');
                squareEl.classList.remove('invalid-place');
              }
            }
          });
          square.addEventListener('drop', (e) => {
            // const orientation = gameProperties.placementOrientation;
            e.preventDefault();
            const ship =
              data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
            const squareStr = e.target.dataset.id;
            const status = data.gameboard.checkPlacement(
              squareStr,
              ship,
              shipOrientation,
            );
            if (status.valid) {
              for (let squareStr of status.elements) {
                const squareEl = elements.gridContainer.querySelector(
                  `[data-id="${squareStr}"]`,
                );
                squareEl.classList.remove('place');
                squareEl.classList.add('placed');
                data.gameboard.placeShip(
                  e.dataTransfer.mozSourceNode.dataset.type,
                  squareStr,
                  shipOrientation,
                );
                e.dataTransfer.mozSourceNode.setAttribute('draggable', false);
                e.dataTransfer.mozSourceNode.classList.add('used');
              }
            } else {
              for (let squareStr of status.elements) {
                const squareEl = elements.gridContainer.querySelector(
                  `[data-id="${squareStr}"]`,
                );
                if (squareEl === null) {
                } else {
                  squareEl.classList.remove('invalid-place');
                }
              }
            }
          });
        }
      };
      enableDraggable(elements.shipContainer.querySelectorAll('.ship'));
      addShipEventListener(elements.shipContainer.querySelectorAll('.ship'));
      addGridEventListener(elements.gridContainer.querySelectorAll('.square'));
    },
    disableShipPlacement() {
      this.elements.shipContainer.classList.add('hide');
      const squares = this.elements.gridContainer.childNodes;
      for (let square of squares) {
        const oldSquare = square;
        const newSquare = oldSquare.cloneNode(true);
        oldSquare.parentNode.replaceChild(newSquare, oldSquare);
      }
    },
    enableReceivingAttack() {
      const squareNodes = this.elements.gridContainer.childNodes;
      const processAttack = (attackResultArg, squareNode) => {
        if (attackResultArg === null) {
          squareNode.classList.add('miss');
        } else if (attackResultArg) {
          squareNode.classList.add('hit');
        }
      };
      for (let squareNode of squareNodes) {
        squareNode.addEventListener('click', () => {
          const attackContent = this.data.gameboard.receiveAttack(
            squareNode.dataset.id,
          );
          processAttack(attackContent, squareNode);
          this.disableReceivingAttack();
        });
      }
    },
    disableReceivingAttack() {
      const squareNodes = this.elements.gridContainer.childNodes;
      for (let squareNode of squareNodes) {
        const oldSquare = squareNode;
        const newSquare = oldSquare.cloneNode(true);
        oldSquare.parentNode.replaceChild(newSquare, oldSquare);
      }
    },
    fadePlayer() {
      this.elements.shipContainer.classList.add('fade');
      this.elements.gridContainer.classList.add('fade');
    },
    unfadePlayer() {
      this.elements.shipContainer.classList.remove('fade');
      this.elements.gridContainer.classList.remove('fade');
    },
    hidePlacedShips() {
      const shipSquares =
        this.elements.gridContainer.querySelectorAll('.placed');
      for (let square of shipSquares) {
        square.classList.remove('placed');
      }
    },
    showPlacedShips() {
      const squaresData = this.data.gameboard.squares;
      const squaresElements = this.elements.gridContainer;
      for (let [key, value] of Object.entries(squaresData)) {
        console.log(key);
        console.log(value);
        if (value.occupies) {
          squaresElements
            .querySelector(`[data-id="${key}"]`)
            .classList.add('placed');
        }
      }
    },
    isShipPlaced() {
      return this.data.gameboard.isOneShipPlaced();
    },
  };
};
export default PlayerComponents;
