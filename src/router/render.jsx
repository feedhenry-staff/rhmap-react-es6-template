'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import Viewport from '../components/viewport.js';

// Views start
import home from '../views/home.js';
import about from '../views/about.js';
import cloud from '../views/cloud.js';
import camera from '../views/camera.js';
// Views end

// Build our high-level "views" hash
const views = {
  home: home,
  cloud: cloud,
  camera: camera,
};

/**
 * Our render function for top level views
 * @param  {String} name
 * @return {undefined}
 */
export default function (name) {
  if (!views[name]) {
    // invalid route was entered, so just go to the homepage
    name = 'home';
  }

  var v = React.createElement(views[name]);

  // TODO: could probably improve this by not rendering the Viewport each time
  ReactDOM.render(
    <Viewport>
      {v}
    </Viewport>,
    document.getElementById('view-content')
  );
}
