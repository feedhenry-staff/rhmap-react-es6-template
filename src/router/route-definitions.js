'use strict';

import render from './render';

export default {
  '/home': {
    on: render.bind(render, 'home')
  },
  '/about': {
    on: render.bind(render, 'about')
  }
};
