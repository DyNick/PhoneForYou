'use strict';

var config = require('./config.js'),
    gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css-mpath'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    minifyJS = require('gulp-uglify');


/*gulp.task('normalize', function() {
    return gulp.src(config.src.normalize)
        .pipe(concat("normalize.css"))
        .pipe(minifyCSS())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(config.dest.css));
});*/

gulp.task('sass', function() {
    return gulp.src(config.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass(config.sassConfig).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(prefixer(config.autoprefixer))
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.dest.css))
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src(config.src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.dest.js))
        .pipe(reload({stream: true}));
});

gulp.task('browserSyncLocal', ['sass', 'js'], function() {
    browserSync(config.browserSyncConfig);
    gulp.watch(config.watchSass, ['sass']);
    // gulp.watch(config.src.sass, ['sass']);
    gulp.watch(config.src.js, ['js']);
    gulp.watch(config.src.html).on('change', reload);
});



gulp.task('default', ['browserSyncLocal']);