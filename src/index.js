'use strict';

import router from './router';
import fastclick from 'fastclick';
import { isCordova } from './util/device';

function onDeviceReady () {
  // Remove touch delay in certain browsers
  fastclick(window.document.body);

  // Initialise application router
  router();
}

if (isCordova()) {
  // "deviceready" indicates we can start our application and use native hooks
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  onDeviceReady();
}
