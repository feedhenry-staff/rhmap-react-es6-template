import React from 'react';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  getTitle() {
    return window.location.hash
      .replace('#', '')
      .toUpperCase();
  }
  render() {
    return (
      <div className="header">
        <h3>Red Hat Mobile ES6 &amp; React</h3>
        <small>{this.getTitle()}</small>
      </div>
    );
  }
}

export default HeaderComponent;
