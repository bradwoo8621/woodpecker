var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('uglify', function () {
	gulp.src('dist/woodpecker.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(rename('woodpecker.min.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'));
});
