var gulp = require('gulp'),
    prettify = require('gulp-html-prettify'),
    sass = require('gulp-sass'),
		server = require('gulp-server-livereload');

gulp.task('html-pretty', function() {
  gulp.src('src/*.html')
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('copy-bootstrap-icons', function() {
   gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*.{ttf,woff,woff2,eot,svg}')
   .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['html-pretty', 'sass']);
});

gulp.task('default', ['html-pretty', 'sass', 'copy-bootstrap-icons', 'webserver', 'watch']);