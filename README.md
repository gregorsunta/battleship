# Battleship

## About

This is the first time I am using test driven development in a project. This project is being built following The Odin Project.

Link to the specific project: [link](https://www.theodinproject.com/lessons/node-path-javascript-battleship)  
Link to the The Odin Project: [link](https://www.theodinproject.com/dashboard)

## Setup

This project is using:

- only **vanilla JavaScript**
- **Webpack** with html-webpack-plugin to also generate html files
- **Jest**
- **SASS**
- **babel** for jest compatibility

For this project I focused on using factory functions and the module pattern instead of classes. I also used for loops instead of array's built-in methods.

## Components

### `DOM.js`
HTML                       |  DOM.JS
:-------------------------:|:-------------------------:
 ![image](https://user-images.githubusercontent.com/102059719/210060868-1ea3e91b-cd7c-4167-b13f-c0d1dcc12cb9.png)|![image](https://user-images.githubusercontent.com/102059719/210060724-1552bf60-e1fb-470b-937d-b6f56d8e8be2.png)

This file is completely dedicated to tying DOM elements as shown in the example above.

### `ship.js`
contains two factory functions:
- `Ship` creates a ship object with specified length
- `Ships` creates a ship collection object

### `gameboard.js`
creates a gameboard object with its own ship collection.

### `player.js`
creates a player object from `gameboard`.js`. It also returns multiple functions to handle/update player data.

## `PlayerComponents.js`
generates its own html elements and data from `player.js`. This is the main factory function which is used to create whole player objects.

## Challenges

### Code structure

I decided to make my DOM referencing completely seperate and hierarchy based. This lead to some improvements like simplicity when accesing this properties and simpler names. But it also caused a lot of problems when adding a new layer to the hierarchy.

I also decided to attach html player element and player data creating functions to a combined factory function `PlayerComponents`. This way I could also add dom manipulating methods and easily manipulate player elements when creating a `const playerOne = new PlayerComponents(someData)` like this: `playerOne.elements.hidePlacedShips()`. This hovewer, presented its own challenges as the code became more complex in the `PlayerComponents.js`
