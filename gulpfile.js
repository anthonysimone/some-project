'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let neatPaths = require('node-neat').includePaths;
// our custom design system package
let designSystemPath = require('design-system').includePath;
 
sass.compiler = require('node-sass');


// Manually defined include paths
let includePaths = [
  'node_modules/normalize.css/',
];
// Add any defined paths
includePaths = includePaths
                  .concat(neatPaths)
                  .concat(designSystemPath);

 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: includePaths
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
