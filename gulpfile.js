var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass');

// Static Server 
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./dist/*.html").on("change", browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {

    return gulp.src("./src/scss/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());

});

gulp.task('default', ['serve']);