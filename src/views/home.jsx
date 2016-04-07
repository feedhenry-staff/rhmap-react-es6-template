
import React from 'react';
import HelloComponent from '../components/hello.js';
import HeaderComponent from '../components/header.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="page">
          <p>
            Welcome to the Home page!
          </p>

          <p>
            Use the input below to say enter your name, and have it echoed back
          </p>

          <HelloComponent/>

          <center>
            <a className="anchor bottom" href="/#about">About</a>
          </center>
        </div>
      </div>
    );
  }
}

export default Home;
