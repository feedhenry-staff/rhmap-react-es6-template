
import React from 'react';
import HeaderComponent from '../components/header.js';

class About extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="page">
          <p>This application has been created using the following technologies:</p>
          <ul>
            <li>React</li>
            <li>ES6</li>
            <li>Babel</li>
            <li>Browserify</li>
            <li>Node.js</li>
            <li>npm</li>
            <li>Gulp</li>
            <li>director (node module)</li>
            <li>&hearts;</li>
          </ul>
        </div>

        <center>
          <a className="anchor bottom" href="/#home">Home</a>
        </center>
      </div>
    );
  }
}

export default About;
