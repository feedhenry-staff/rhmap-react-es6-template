(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = takePicture;

var _isCordova = require('../util/is-cordova.js');

var _isCordova2 = _interopRequireDefault(_isCordova);

var _nodeify = require('../util/nodeify.js');

var nodeify = _interopRequireWildcard(_nodeify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Capture an image using the cordova camera plugin.
 * If on a browser a dummy image is returned. On mobile the camera is used.
 * @param  {Function} callback
 * @return {undefined}
 */
function takePicture(callback) {
  (0, _isCordova2.default)() ? useCameraPlugin(callback) : useDummyImage(callback);
}

/**
 * Capture an image using the device camera on mobile
 * @param  {Function}   callback
 * @return {undefined}
 */
function useCameraPlugin(callback) {
  var cameraSettings = {
    destinationType: window.Camera.DestinationType.FILE_URI,
    quality: 50
  };

  navigator.camera.getPicture(nodeify.success(callback), function onCameraSuccess(data) {
    callback(null, data);
  }, cameraSettings);
}

/**
 * Fallback for desktop applications. Just returns a base64 string
 * @param  {Function} callback
 * @return {undefined}
 */
function useDummyImage(callback) {
  callback(null, 'img/react-logo.png');
}
},{"../util/is-cordova.js":12,"../util/nodeify.js":13}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = sayHello;

var _nodeify = require('../util/nodeify.js');

var nodeify = _interopRequireWildcard(_nodeify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Calls the cloud /hello route with the given name
 * @param  {String}   name
 * @param  {Function} callback
 */
function sayHello(name, callback) {
  var locals = ['localhost', '127.0.0.1'];

  if (locals.indexOf(window.location.hostname) !== -1) {
    // When running locally just mimic cloud behaviours
    callback(null, {
      msg: 'Hello '.concat(name)
    });
  } else {
    window.$fh.cloud({
      post: 'POST',
      path: '/hello',
      data: {
        hello: name
      }
    },
    // Wrap a single callback pattern (node-style) to browser double style
    nodeify.success(callback), nodeify.failure(callback));
  }
}
},{"../util/nodeify.js":13}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _device = require('../util/device');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderComponent = function (_React$Component) {
  _inherits(HeaderComponent, _React$Component);

  function HeaderComponent(props) {
    _classCallCheck(this, HeaderComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderComponent).call(this, props));
  }

  _createClass(HeaderComponent, [{
    key: 'getPadding',
    value: function getPadding() {
      if ((0, _device.isAppleDevice)()) {
        return '20px';
      } else {
        return '0';
      }
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      return window.location.hash.replace(/#/g, '').replace('/', '').toUpperCase();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: this.getPadding() }, className: 'header rh-red-background rh-grey-border' },
        _react2.default.createElement('img', { onClick: this.props.toggleMenu, className: 'icon', src: 'img/menu-icon.png' }),
        _react2.default.createElement(
          'div',
          { className: 'text' },
          _react2.default.createElement(
            'h3',
            null,
            'Red Hat Mobile ES6 & React'
          ),
          _react2.default.createElement(
            'small',
            null,
            this.getTitle()
          )
        )
      );
    }
  }]);

  return HeaderComponent;
}(_react2.default.Component);

exports.default = HeaderComponent;
},{"../util/device":11,"react":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hello = require('../cloud/hello.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloComponent = function (_React$Component) {
  _inherits(HelloComponent, _React$Component);

  function HelloComponent(props) {
    _classCallCheck(this, HelloComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloComponent).call(this, props));

    _this.state = {
      name: '',
      hello: 'You\'ve not said hello yet.'
    };
    return _this;
  }

  _createClass(HelloComponent, [{
    key: 'onHello',
    value: function onHello(err, data) {
      if (err) {
        this.setState({
          hello: 'Saying hello failed - ' + err.msg || 'Cloud call error'
        });
      } else {
        this.setState({
          cloudHello: data.msg
        });
      }
    }
  }, {
    key: 'callHelloCloud',
    value: function callHelloCloud() {
      this.setState({
        cloudHello: 'Waiting...'
      });
      (0, _hello.sayHello)(this.state.name, this.onHello.bind(this));
    }
  }, {
    key: 'onChange',
    value: function onChange(evt) {
      this.state.name = evt.target.value;

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          type: 'text',
          placeholder: 'Enter a name...',
          onChange: this.onChange.bind(this) }),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Result: ',
            this.state.cloudHello
          )
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'bottom center rh-navy-background',
            onClick: this.callHelloCloud.bind(this) },
          'Call Cloud'
        )
      );
    }
  }]);

  return HelloComponent;
}(_react2.default.Component);

exports.default = HelloComponent;
},{"../cloud/hello.js":2,"react":undefined}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarComponent = function (_React$Component) {
  _inherits(SidebarComponent, _React$Component);

  function SidebarComponent(props) {
    _classCallCheck(this, SidebarComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SidebarComponent).call(this, props));
  }

  _createClass(SidebarComponent, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { onClick: this.props.closeFn, className: "sidebar rh-slate-background" },
        _react2.default.createElement(
          "h2",
          { className: "head rh-red-background" },
          _react2.default.createElement("img", { src: "img/rh-logo.png" })
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            { className: "rh-navy-background rh-slate-border" },
            _react2.default.createElement(
              "a",
              { href: "#home" },
              "Home"
            )
          ),
          _react2.default.createElement(
            "li",
            { className: "rh-navy-background rh-slate-border" },
            _react2.default.createElement(
              "a",
              { href: "#camera" },
              "Camera"
            )
          ),
          _react2.default.createElement(
            "li",
            { className: "rh-navy-background rh-slate-border" },
            _react2.default.createElement(
              "a",
              { href: "#cloud" },
              "Cloud"
            )
          )
        )
      );
    }
  }]);

  return SidebarComponent;
}(_react2.default.Component);

exports.default = SidebarComponent;
},{"react":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header.js');

var _header2 = _interopRequireDefault(_header);

var _sidebarContent = require('./sidebar-content.js');

var _sidebarContent2 = _interopRequireDefault(_sidebarContent);

var _reactSidebar = require('react-sidebar');

var _reactSidebar2 = _interopRequireDefault(_reactSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewportComponent = function (_React$Component) {
  _inherits(ViewportComponent, _React$Component);

  function ViewportComponent(props) {
    _classCallCheck(this, ViewportComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ViewportComponent).call(this, props));

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(ViewportComponent, [{
    key: 'onSetOpen',
    value: function onSetOpen(open) {
      this.setState({
        open: open
      });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu(ev) {
      ev.preventDefault();
      this.onSetOpen(!this.state.open);
    }
  }, {
    key: 'render',
    value: function render() {
      var sidebarOpts = {
        open: this.state.open,
        docked: false,
        transitions: true,
        touch: false,
        styles: {
          content: {
            overflow: 'hidden'
          }
        },
        sidebar: _react2.default.createElement(_sidebarContent2.default, { closeFn: this.onSetOpen.bind(this, false) })
      };

      return _react2.default.createElement(
        _reactSidebar2.default,
        sidebarOpts,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_header2.default, { toggleMenu: this.toggleMenu.bind(this) }),
          _react2.default.createElement(
            'div',
            { className: 'page' },
            this.props.children
          )
        )
      );
    }
  }]);

  return ViewportComponent;
}(_react2.default.Component);

exports.default = ViewportComponent;
},{"./header.js":3,"./sidebar-content.js":5,"react":undefined,"react-sidebar":undefined}],7:[function(require,module,exports){
'use strict';

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _device = require('./util/device');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onDeviceReady() {
  // Remove touch delay in certain browsers
  (0, _fastclick2.default)(window.document.body);

  // Initialise application router
  (0, _router2.default)();
}

if ((0, _device.isCordova)()) {
  // "deviceready" indicates we can start our application and use native hooks
  document.addEventListener('deviceready', onDeviceReady, false);
} else {
  onDeviceReady();
}
},{"./router":8,"./util/device":11,"fastclick":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // Create a router an bind our routes
  var rtr = _director2.default.Router(_routeDefinitions2.default);

  rtr.configure({
    notfound: onNotFound,
    strict: false
  });

  // Start of by navigating to /home
  rtr.init('/#home');
};

var _director = require('director');

var _director2 = _interopRequireDefault(_director);

var _routeDefinitions = require('./route-definitions');

var _routeDefinitions2 = _interopRequireDefault(_routeDefinitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onNotFound() {
  window.location.href = '/#home';
}

/**
 * This is the public function for this file. Anywhere it is "required" or
 * imported this will be given as the value
 * @return {function}
 */
},{"./route-definitions":10,"director":undefined}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  if (!views[name]) {
    // invalid route was entered, so just go to the homepage
    name = 'home';
  }

  var v = _react2.default.createElement(views[name]);

  // TODO: could probably improve this by not rendering the Viewport each time
  _reactDom2.default.render(_react2.default.createElement(
    _viewport2.default,
    null,
    v
  ), document.getElementById('view-content'));
};

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _viewport = require('../components/viewport.js');

var _viewport2 = _interopRequireDefault(_viewport);

var _home = require('../views/home.js');

var _home2 = _interopRequireDefault(_home);

var _about = require('../views/about.js');

var _about2 = _interopRequireDefault(_about);

var _cloud = require('../views/cloud.js');

var _cloud2 = _interopRequireDefault(_cloud);

var _camera = require('../views/camera.js');

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Views end

// Build our high-level "views" hash


// Views start
var views = {
  home: _home2.default,
  cloud: _cloud2.default,
  camera: _camera2.default
};

/**
 * Our render function for top level views
 * @param  {String} name
 * @return {undefined}
 */
},{"../components/viewport.js":6,"../views/about.js":14,"../views/camera.js":15,"../views/cloud.js":16,"../views/home.js":17,"react":undefined,"react-dom":undefined}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  '/:name': {
    on: _render2.default.bind(_render2.default)
  }
};
},{"./render":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCordova = isCordova;
exports.isAppleDevice = isAppleDevice;
function isCordova() {
  return typeof window.cordova !== 'undefined';
}

function isAppleDevice() {
  return isCordova() && navigator.userAgent.match(/iPhone|iPad|iPod/);
}
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCordova;
function isCordova() {
  return typeof window.cordova !== 'undefined';
}
},{}],13:[function(require,module,exports){
'use strict';

/**
 * Wrap a single node style callback for use as a browser API "fail" callback
 * @param  {Function} fn
 * @return {Function}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failure = failure;
exports.success = success;
function failure(fn) {
  return function () {
    fn.apply(fn, Array.prototype.slice.call(arguments));
  };
}

/**
 * Wrap a single node style callback for use as a browser API "success" callback
 * @param  {Function} fn
 * @return {Function}
 */
function success(fn) {
  return function () {
    fn.apply(fn, [null].concat(Array.prototype.slice.call(arguments)));
  };
}
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header.js');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutView = function (_React$Component) {
  _inherits(AboutView, _React$Component);

  function AboutView() {
    _classCallCheck(this, AboutView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutView).apply(this, arguments));
  }

  _createClass(AboutView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'This application has been created using the following technologies:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'React'
          ),
          _react2.default.createElement(
            'li',
            null,
            'ES6'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Babel'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Browserify'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Node.js'
          ),
          _react2.default.createElement(
            'li',
            null,
            'npm'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Gulp'
          ),
          _react2.default.createElement(
            'li',
            null,
            'director (node module)'
          ),
          _react2.default.createElement(
            'li',
            null,
            '♥'
          )
        )
      );
    }
  }]);

  return AboutView;
}(_react2.default.Component);

exports.default = AboutView;
},{"../components/header.js":3,"react":undefined}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _camera = require('../camera');

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CameraView = function (_React$Component) {
  _inherits(CameraView, _React$Component);

  function CameraView(props) {
    _classCallCheck(this, CameraView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CameraView).call(this, props));

    _this.state = {
      imageUrl: ''
    };
    return _this;
  }

  _createClass(CameraView, [{
    key: 'onImageCaptured',
    value: function onImageCaptured(err, dataUrl) {
      if (err) {
        window.alert('Failed to capture an image: ' + err.toString());
      } else {
        this.setState({
          imageUrl: dataUrl
        });
      }
    }
  }, {
    key: 'captureImage',
    value: function captureImage() {
      (0, _camera2.default)(this.onImageCaptured.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Cordova enables you to access native device functionality using plugins.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Plugins work by enabling you to call native Java/Objective-C/C# code from our JavaScript code.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Use the button below to use this device\'s camera!'
        ),
        _react2.default.createElement('img', {
          style: { maxWidth: '100%', maxHeight: '25vh' },
          src: this.state.imageUrl }),
        _react2.default.createElement(
          'p',
          null,
          this.state.imageUrl
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.captureImage.bind(this), className: 'bottom center rh-navy-background' },
          'Take a Picture'
        )
      );
    }
  }]);

  return CameraView;
}(_react2.default.Component);

exports.default = CameraView;
},{"../camera":1,"../components/header.js":3,"react":undefined}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hello = require('../components/hello.js');

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CloudView = function (_React$Component) {
  _inherits(CloudView, _React$Component);

  function CloudView() {
    _classCallCheck(this, CloudView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CloudView).apply(this, arguments));
  }

  _createClass(CloudView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Using our SDK makes it possible to call an endpoint on your Red Hat Mobile instance.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The host URL that is used will be determined by the configuration contained in ',
          _react2.default.createElement(
            'i',
            null,
            'www/fhconfig.json'
          ),
          '.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You can use the input below to enter your name and have the a Cloud Application echo it back.'
        ),
        _react2.default.createElement(_hello2.default, null)
      );
    }
  }]);

  return CloudView;
}(_react2.default.Component);

exports.default = CloudView;
},{"../components/hello.js":4,"react":undefined}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeView = function (_React$Component) {
  _inherits(HomeView, _React$Component);

  function HomeView() {
    _classCallCheck(this, HomeView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeView).apply(this, arguments));
  }

  _createClass(HomeView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "p",
          null,
          "Welcome to the RedHat Mobile React ES6 template application. This application provides an example of how React, Babel, Browserify and Cordova can be used to create a simple mobile application."
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { className: "small", src: "img/cordova-logo.png" }),
          _react2.default.createElement(
            "p",
            null,
            "Cordova is a platform that enables developers to create mobile applications using HTML, CSS and JavaScript."
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { className: "small", src: "img/react-logo.png" }),
          _react2.default.createElement(
            "p",
            null,
            "React is a JavaScript library that simplifies the creation of a UI by enabling developers to create view components that are reusable."
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { className: "small", src: "img/babel-logo.svg" }),
          _react2.default.createElement(
            "p",
            null,
            "Babel is a tool used to compile ES6 style JavaScript to a cross browser compatible format. This allows you to use the latest standards to develop, but retain support for less modern browsers."
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { className: "small", src: "img/browserify-logo.png" }),
          _react2.default.createElement(
            "p",
            null,
            "We use browserify to take our modularised code and bundle it into a single JavaScript file so it can run in a browser."
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { style: { maxHeight: '14vh' }, src: "img/gulp-logo.png" }),
          _react2.default.createElement(
            "p",
            null,
            "Gulp is a JavaScript build system that can be used to automate tasks. It uses Node.js streams to pipe outputs from one task to another and has a programmatic rather than delcaritive structure."
          )
        )
      );
    }
  }]);

  return HomeView;
}(_react2.default.Component);

exports.default = HomeView;
},{"react":undefined}]},{},[7]);
