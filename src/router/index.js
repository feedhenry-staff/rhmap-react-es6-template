'use strict';

import director from 'director';
import routes from './route-definitions';

/**
 * This is the public function for this file. Anywhere it is "required" or
 * imported this will be given as the value
 * @return {function}
 */
export default function () {
  var rtr = director.Router(routes);

  rtr.configure({
    notfound: onNotFound,
    strict: false,
    on: routeChange,
  });

  rtr.init('/');
}


function onNotFound () {
  window.location.href = '/#home';
}

function routeChange () {
  console.log('routeChange', arguments);
}
