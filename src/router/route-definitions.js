'use strict';

import render from './render';

export default {
  '/:name': {
    on: render.bind(render)
  }
};
