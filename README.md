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

## Components

All of the components (except gameLoop.js) have their respective test files containing multiple tests. 
### `DOM.js`
HTML                       |  DOM.JS
:-------------------------:|:-------------------------:
 ![image](https://user-images.githubusercontent.com/102059719/210060868-1ea3e91b-cd7c-4167-b13f-c0d1dcc12cb9.png)|![image](https://user-images.githubusercontent.com/102059719/210060724-1552bf60-e1fb-470b-937d-b6f56d8e8be2.png)
This file is completely dedicated to DOM element referencing as shown in the example above.
### `ship.js`
This file contains two factory functions:
- `Ship` creates a ship with specified length
- `Ships` creates a ship collection 

## Challenges
### Structuring code
In previous projects I was strugling to seperate DOM manipulation from application functionality. In this project somehow changing (preferribly improving :) ) my code structure was a must. I knew that seperating application logic from DOM manipulation is one of the most important parts of improving my code readability so I completely seperated the strictly app-logic-containing parts (`ship.js`, `gameboard.js`, `player.js`) from the DOM manipulation part (`gameLoop.js`). In `gameLoop.js` (the DOM manipulating) file I also took out element referencing to `DOM.js` which I thought was a better way of organizing code.

### Dynamically changing ship size depending on the generated square size
Using SASS (and its variables) and manipulating its properties was not as straight forward (it being a preprocessor) as manipulating vanilla CSS properties. I found multiple options to somehow change SASS properties for instance:
- exporting properties to a JSON (to act as the "middleman" between JS and SASS)
- using the :export block from CSS modules
but the simplest method (which occured to me at the beginning) was to use CSS variables in the SASS file and manipulate them by using CSSStyleDeclaration.setProperty(). 
