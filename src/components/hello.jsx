
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
        hello: 'Saying hello failed!'
      });
    } else {
      this.setState({
        hello: data.msg
      });
    }
  }
  onChange(evt) {
    this.state.name = evt.target.value;
    sayHello(this.state.name, this.onHello.bind(this));
    return true;
  }
  render() {
    return (
      <div className="well">
        <input type="text" placeholder="Enter a name..." onChange={this.onChange.bind(this)}></input>

        <p>Result: {this.state.hello}</p>
      </div>
    );
  }
}

export default HelloComponent;
