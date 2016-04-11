
import React from 'react';
import { isAppleDevice } from '../util/device';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  getPadding() {
    if (isAppleDevice()) {
      return '20px';
    } else {
      return '0';
    }
  }
  getTitle() {
    return window.location.hash
      .replace(/#/g, '')
      .replace('/', '')
      .toUpperCase();
  }
  render() {
    return (
      <div style={{paddingTop: this.getPadding()}} className="header rh-red-background rh-grey-border">
        <img onClick={this.props.toggleMenu} className="icon" src="img/menu-icon.png"></img>
        <div className="text">
          <h3>Red Hat Mobile ES6 &amp; React</h3>
          <small>{this.getTitle()}</small>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
