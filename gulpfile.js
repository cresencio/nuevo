var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sass = require('gulp-sass'),;

gulp.task('imagemin', function () {
  gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

// gulp.task('copy-bootstrap-icons', function() {
//    gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*.{ttf,woff,woff2,eot,svg}')
//    .pipe(gulp.dest('./dist/fonts'));
// });

gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['imagemin', 'sass']);
});

gulp.task('default', ['imagemin', 'sass', 'watch']);