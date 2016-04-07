'use strict';

import ReactDOM from 'react-dom';
import React from 'react';

// Views start
import home from '../views/home.js';
import about from '../views/about.js';
// Views end

// Build our high-level "views" hash
const views = {
  home: home,
  about: about
};

/**
 * Our render function for top level views
 * @param  {String} name
 * @return {undefined}
 */
export default function (name) {
  ReactDOM.render(
    React.createElement(views[name]),
    document.getElementById('view-content')
  );
}
