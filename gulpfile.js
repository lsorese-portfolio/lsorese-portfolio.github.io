var env = "dev",
    gulp = require('gulp'),
    bower = require('gulp-bower'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

gulp.task('default', ['sass']['js']);

gulp.task('sass', function() {
    return gulp.src('assets/css/*.scss')
        .pipe(autoprefixer())
        .pipe(sass())
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('js', function() {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min/'));
});

gulp.task('watch', function() {
    gulp.watch('assets/css/*.scss', ['sass'])
    gulp.watch('assets/js/*.js', ['js'])
});
