'use strict'

/**
* More info: https://css-tricks.com/gulp-for-beginners/
**/
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const jade = require('gulp-jade')
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
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('index', function(){
  return gulp.src('./src/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('jade', function(){
  return gulp.src('./src/views/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('public/views'))
  .pipe(browserSync.reload({
    stream: true
  }))
})
 
gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('./src/sass/**/*.sass', ['sass'])
  gulp.watch('./public/assets/js/**/*.js', browserSync.reload)
  gulp.watch('./src/*.jade', ['index'])
  gulp.watch('./src/views/**/*.jade', ['jade'])
})

