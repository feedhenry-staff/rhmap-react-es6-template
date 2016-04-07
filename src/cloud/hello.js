'use strict';

import nodeify from '../util/nodeify.js';

export function sayHello (name, callback) {
  let locals = ['localhost', '127.0.0.1'];

  if (locals.indexOf(window.location.hostname) !== -1) {
    // When running locally just mimic cloud behaviours
    callback(null, {
      msg: 'Hello '.concat(name)
    });
  } else {
    window.$fh.cloud(
      {
        post: 'POST',
        data: {
          hello: name
        }
      },
      // Wrap a single callback pattern (node-style) to browser double style
      nodeify.success(callback),
      nodeify.fail(callback)
    );
  }
}
