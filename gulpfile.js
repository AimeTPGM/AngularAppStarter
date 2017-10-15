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
  return gulp.src('./src/assets/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('js', function(){
  return gulp.src('./src/assets/js/**/*.js')
  .pipe(gulp.dest('./public/assets/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('controller', function(){
  return gulp.src('./src/assets/js/controllers/**/*.js')
  .pipe(gulp.dest('./public/assets/js/controllers'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('font', function(){
  return gulp.src('./src/assets/fonts/**/*.*')
  .pipe(gulp.dest('./public/assets/fonts'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('index', function(){
  return gulp.src('./src/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('public'))
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
 
gulp.task('watch', ['browserSync', 'index', 'jade', 'font', 'sass', 'js', 'controller'], function () {
  gulp.watch('./src/assets/sass/**/*.sass', ['sass'])
  gulp.watch('./src/assets/js/**/*.js', ['js'])
  gulp.watch('./src/assets/fonts/controllers/**/*.*', ['controller'])
  gulp.watch('./src/*.jade', ['index'])
  gulp.watch('./src/views/**/*.jade', ['jade'])
  gulp.watch('./src/assets/fonts/**/*.*', ['font'])
})

