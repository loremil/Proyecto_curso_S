
/*
* Dependencias de gulp
*/
var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('concat', function() {
  gulp.src('gulp-controladores/*.js')
  .pipe(concat('controller.js'))
  .pipe(gulp.dest(''))
});

gulp.task('watch-js', function() {
  gulp.watch('gulp-controladores/*.js', ['concat'], function() {
    console.log('watching js changes...');
  });
});

gulp.task('default', ['watch-js'], function() {
  console.log('Executing gulp...');
});

/*Ejecutar task =  "gulp" + enter*/
