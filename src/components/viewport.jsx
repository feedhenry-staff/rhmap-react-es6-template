
import React from 'react';
import HeaderComponent from './header.js';
import SidebarContent from './sidebar-content.js';
import ReactSidebar from 'react-sidebar';

class ViewportComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  onSetOpen(open) {
    this.setState({
      open: open
    });
  }
  toggleMenu(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }
  render() {
    const sidebarOpts = {
      open: this.state.open,
      docked: false,
      transitions: true,
      touch: false,
      styles: {
        content: {
          overflow: 'hidden'
        }
      },
      sidebar: <SidebarContent closeFn={this.onSetOpen.bind(this, false)}/>
    };

    return (
      <ReactSidebar {...sidebarOpts}>
        <div>
          <HeaderComponent toggleMenu={this.toggleMenu.bind(this)}/>
          <div className='page'>
            {this.props.children}
          </div>
        </div>
      </ReactSidebar>
    );
  }
}

export default ViewportComponent;
