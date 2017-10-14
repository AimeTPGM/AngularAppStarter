'use strict'
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const connect = require('gulp-connect')
const livereload = require('gulp-livereload')
const browserSync = require('browser-sync').create()

gulp.task('browserSync', function() {
  browserSync.init({
    server : {
        baseDir : 'public'
    },
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
 
gulp.task('sass:watch', ['browserSync', 'sass'], function () {
  gulp.watch('./sass/**/*.sass', ['sass'])
})

