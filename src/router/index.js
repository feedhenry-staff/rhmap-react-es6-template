'use strict';

import director from 'director';
import routes from './route-definitions';

/**
 * This is the public function for this file. Anywhere it is "required" or
 * imported this will be given as the value
 * @return {function}
 */
export default function () {
  // Create a router an bind our routes
  var rtr = director.Router(routes);

  rtr.configure({
    notfound: onNotFound,
    strict: false
  });

  // Start of by navigating to /home
  rtr.init('/#home');
}

function onNotFound () {
  window.location.href = '/#home';
}
