
import React from 'react';
import HelloComponent from '../components/hello.js';

class CloudView extends React.Component {
  render() {
    return (
      <div>
        <p>
          Using our SDK makes it possible to call an endpoint on your Red Hat Mobile instance.
        </p>
        <p>
          The host URL that is used will be determined by the configuration
          contained in <i>www/fhconfig.json</i>.
        </p>

        <p>
          You can use the input below to enter your name and have the a Cloud Application
          echo it back.
        </p>

        <HelloComponent/>
      </div>
    );
  }
}

export default CloudView;
