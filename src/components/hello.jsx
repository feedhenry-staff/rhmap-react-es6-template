
import React from 'react';
import {sayHello} from '../cloud/hello.js';

class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hello: 'You\'ve not said hello yet.'
    };
  }
  onHello(err, data) {
    if (err) {
      this.setState({
        hello: 'Saying hello failed - ' + err.msg || 'Cloud call error'
      });
    } else {
      this.setState({
        cloudHello: data.msg
      });
    }
  }
  callHelloCloud() {
    this.setState({
      cloudHello: 'Waiting...'
    });
    sayHello(this.state.name, this.onHello.bind(this));
  }
  onChange(evt) {
    this.state.name = evt.target.value;

    return true;
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a name..."
          onChange={this.onChange.bind(this)}>
        </input>

        <center>
          <p>Result: {this.state.cloudHello}</p>
        </center>

      <button
        className="bottom center rh-navy-background"
        onClick={this.callHelloCloud.bind(this)}>
        Call Cloud
      </button>
      </div>
    );
  }
}

export default HelloComponent;
