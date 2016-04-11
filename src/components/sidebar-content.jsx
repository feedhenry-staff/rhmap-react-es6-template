import React from 'react';

class SidebarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={this.props.closeFn} className="sidebar rh-slate-background">
        <h2 className="head rh-red-background">
          <img src="img/rh-logo.png"></img>
        </h2>
        <ul>
          <li className="rh-navy-background rh-slate-border">
            <a href="#home">
              Home
            </a>
          </li>
          <li className="rh-navy-background rh-slate-border">
            <a href="#camera">
              Camera
            </a>
          </li>
          <li className="rh-navy-background rh-slate-border">
            <a href="#cloud">
              Cloud
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarComponent;
