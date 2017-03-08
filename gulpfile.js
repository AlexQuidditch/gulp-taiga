'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
	assets = require('postcss-assets'),
	nested = require('postcss-nested'),
	cssShort = require('postcss-short'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
	htmlmin = require('gulp-html-minifier'),
    gulpIf = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
	browserSync = require('browser-sync').create(),

    sassOptions = {
        outputStyle: 'expanded',
        errLogToConsole: true
    },
	postOptions = [
		assets,
		nested,
		cssShort
	],
	buildOptions = [
		assets,
		nested,
		cssShort,
		cssnano,
		autoprefixer({
			browsers: ["last 10 version"],
			cascade: !0
		})
	];

gulp.task('sass', () => gulp.src('./app/scss/*.scss')
	.pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.pipe(postcss(postOptions))
	.pipe(sourcemaps.write('maps'))
.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream()));

// Watcher
gulp.task('watch', () => {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch(['./app/js/*.js', './app/*.html'])
                    .on('change', browserSync.reload)
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: './app'
		}
	})
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', () => gulp.src('./app/*.html')
    .pipe(plumber())
        .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            .pipe(gulpIf('*.css', cssnano()))
    .pipe(plumber.stop())
.pipe(gulp.dest('build')));

// Copying fonts
gulp.task('fonts', () => gulp.src('./app/fonts/**/*')
	.pipe(gulp.dest('./build/fonts')))

// Copying assets
gulp.task('images', () => gulp.src('./app/assets/**/*.*')
    .pipe(gulp.dest('./build/assets')));

gulp.task('copies', () => gulp.src(['./app/php/*.php', './app/js/*.min.js'])
.pipe(gulpIf('*.js', gulp.dest('./build/js')))
.pipe(gulpIf('*.php', gulp.dest('./build/'))));

// Cleaning
gulp.task('clean', () => del.sync('./build').then(cb => cache.clearAll(cb)));

gulp.task('clean:app', () => del.sync(['./app/css/**/*.css', './app/css/**/*.map']));

gulp.task('clean:build', () => del.sync(['./build/**/*', '!./build/assets', '!./build/assets/**/*']));

gulp.task('sass-build', () => gulp.src('./app/scss/*.scss')
	.pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.pipe(postcss(buildOptions))
	.pipe(sourcemaps.write('./maps'))
.pipe(gulp.dest('./app/css')));

// Build Sequences

gulp.task('default', callback => {
	runSequence(
		['sass', 'watch'],
		'browser-sync',
		callback
	)
});

gulp.task('build', callback => {
	runSequence(
		'clean:build',
		'sass-build',
		['useref', 'images', 'fonts', 'copies'],
		'clean:app',
		callback
	)
});
