const { src, dest, watch, series, parallel } = require('gulp');

const
	sassGlob = require('gulp-sass-glob'),
	sass = require('gulp-sass')(require('sass')),
	cssMedia = require('gulp-group-css-media-queries'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create();


const server = () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
}

const scssTask = () => {
	return src('scss/main.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('css/'));
	// .pipe(browserSync.stream());
}

const mediamin = () => {
	return src('css/*.css')
		.pipe(cssMedia())
		.pipe(cleanCSS())
		.pipe(rename({
			basename: 'style',
			suffix: '.min'
		}))
		.pipe(dest('css/'))
}

const watchFiles = () => {
	watch(['scss/**/*.scss'], series(scssTask));
}

const start = series(scssTask);

exports.mediamin = mediamin;
exports.default = series(
	start,
	parallel(watchFiles)
);
