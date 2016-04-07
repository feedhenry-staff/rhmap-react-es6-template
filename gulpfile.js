'use strict';

var fs = require('fs')
  , gulp = require('gulp')
  , babel = require('gulp-babel')
  , browserify = require('browserify');

function getDepsList () {
  return Object.keys(
    require('./package.json').dependencies
  );
}


// Takes es2016/es6 and creates code that works with today's browsers
gulp.task('transform-es6', function () {
  return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
    .pipe(babel({
      sourceMaps: true,
			presets: ['es2015', 'react']
		}))
    .pipe(gulp.dest('.tmp/compiled-js'));
});


// Bundle our main source into a usable file
gulp.task('browserify-bundle', ['transform-es6'], function () {
  var b = browserify();

  b.add('.tmp/compiled-js/index.js');

  getDepsList().forEach(b.exclude.bind(b));

  return b.bundle()
    .pipe(fs.createWriteStream('./www/js/bundle.js'));
});


// Bundles our dependencies into a single package outside of our main src
gulp.task('browserify-vendor', function () {
  var b = browserify();

  getDepsList().forEach(b.require.bind(b));

  return b.bundle()
    .pipe(fs.createWriteStream('./www/js/vendor.js'));
});


gulp.task('bundle', [
  'transform-es6',
  'browserify-vendor',
  'browserify-bundle'
]);

// Runs whenever we call gulp without args
gulp.task('default', [
  'bundle'
]);
