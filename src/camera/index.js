'use strict';

import isCordova from '../util/is-cordova.js';
import * as nodeify from '../util/nodeify.js';

/**
 * Capture an image using the cordova camera plugin.
 * If on a browser a dummy image is returned. On mobile the camera is used.
 * @param  {Function} callback
 * @return {undefined}
 */
export default function takePicture (callback) {
  isCordova() ? useCameraPlugin(callback) : useDummyImage(callback);
}


/**
 * Capture an image using the device camera on mobile
 * @param  {Function}   callback
 * @return {undefined}
 */
function useCameraPlugin (callback) {
  let cameraSettings = {
    destinationType: window.Camera.DestinationType.FILE_URI,
    quality: 50
  };

  navigator.camera.getPicture(
    nodeify.success(callback),
    function onCameraSuccess (data) {
      callback(null, data);
    },
    cameraSettings
  );
}


/**
 * Fallback for desktop applications. Just returns a base64 string
 * @param  {Function} callback
 * @return {undefined}
 */
function useDummyImage (callback) {
  callback(
    null,
    'img/react-logo.png'
  );
}
