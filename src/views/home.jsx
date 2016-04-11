
import React from 'react';

class HomeView extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome to the RedHat Mobile React ES6 template application. This
          application provides an example of how React, Babel, Browserify and
          Cordova can be used to create a simple mobile application.
        </p>

        <div>
          <img className="small" src="img/cordova-logo.png"></img>
          <p>
            Cordova is a platform that enables developers to create mobile
            applications using HTML, CSS and JavaScript.
          </p>
        </div>

        <div>
          <img className="small" src="img/react-logo.png"></img>
          <p>
            React is a JavaScript library that simplifies the creation of a UI
            by enabling developers to create view components that are reusable.
          </p>
        </div>

        <div>
          <img className="small" src="img/babel-logo.svg"></img>
          <p>
            Babel is a tool used to compile ES6 style JavaScript to a cross
            browser compatible format. This allows you to use the latest
            standards to develop, but retain support for less modern browsers.
          </p>
        </div>

        <div>
          <img className="small" src="img/browserify-logo.png"></img>
          <p>
            We use browserify to take our modularised code and bundle it into a
            single JavaScript file so it can run in a browser.
          </p>
        </div>

        <div>
          <img style={{maxHeight: '14vh'}} src="img/gulp-logo.png"></img>
          <p>
            Gulp is a JavaScript build system that can be used to automate tasks.
            It uses Node.js streams to pipe outputs from one task to another
            and has a programmatic rather than delcaritive structure.
          </p>
        </div>
      </div>
    );
  }
}

export default HomeView;
