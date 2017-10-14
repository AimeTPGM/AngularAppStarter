'use strict'

/**
* More info: https://css-tricks.com/gulp-for-beginners/
**/
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const connect = require('gulp-connect')
const livereload = require('gulp-livereload')
const browserSync = require('browser-sync').create()

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'http://localhost:3000'
    ,
  })
})

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
 
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('./sass/**/*.sass', ['sass'])
  gulp.watch('./public/assets/js/**/*.js', browserSync.reload)
  gulp.watch('./public/*.html', browserSync.reload)
  gulp.watch('./public/views/*.html', browserSync.reload)
})

