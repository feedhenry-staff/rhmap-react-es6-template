# Red Hat Mobile - React ES6 Example
This application provides an example of how React, ES6, and Browserify can be
used to structure a mobile application.

This is an early prototype and requires significant work before it could be
considered a template.

## Setup Startup
To get the project setup just run ```npm install``` from the project root.

## Running a Server
Run ```npm start``` from the root directory of the project.

## How it Works
Upon calling ```npm start```, babel will walk the /src folder and transform all
files from ES6 style JavaScript to older (widely supported) ES5. This generated
ES5 is placed in .tmp, but is not ready to be used yet since it has simply been
transformed to a CommonJS style (think node.js require), but this still won't
work in a browser due to the fact that browsers don't have a built in module
system. We get around this by having browserify compile the generated files
into a single bundle a browser can use.

## Technologies

### React
An awesome rendering engine for HTML5 applications, best explained by the line
from the [official site](https://facebook.github.io/react/).

### Babel
Babel is a tool used to compile ES6 style JavaScript to a cross browser
compatible format. This allows you to use the latest standards to develop, but
retain support for less modern browsers. The [website](https://babeljs.io/)
has examples.

### Gulp
Similar to Grunt, Ant, etc. Gulp is a task runner that utilises the node.js
streams concept to chain together commands in a programmatic manner.

### Browserify
We use browserify to take our modularised code and bundle it into a single
JavaScript file so it can run in a browser.

## TODOS
* Watch files for changes and auto recompile
* Add source maps for easier debugging
