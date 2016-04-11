'use strict';

export function isCordova () {
  return (typeof window.cordova !== 'undefined');
}

export function isAppleDevice () {
  return isCordova() && navigator.userAgent.match(/iPhone|iPad|iPod/);
}
