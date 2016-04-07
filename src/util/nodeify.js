'use strict';

/**
 * Wrap a single node style callback for use as a browser API "fail" callback
 * @param  {Function} fn
 * @return {Function}
 */
export function failure (fn) {
  return function () {
    fn.apply(fn, Array.prototype.slice.call(arguments));
  };
}


/**
 * Wrap a single node style callback for use as a browser API "success" callback
 * @param  {Function} fn
 * @return {Function}
 */
export function success (fn) {
  return function () {
    fn.apply(fn, [null].concat(Array.prototype.slice.call(arguments)));
  };
}
