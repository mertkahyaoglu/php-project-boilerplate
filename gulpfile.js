var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    php = require('gulp-connect-php'),
    browserSync = require('browser-sync'),
    reload  = browserSync.reload;

gulp.task('styles', function() {
    gulp.src('./css/stylus/app.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'))
});

gulp.task('php', function() {
    php.server({ base: '.', port: 8010, keepalive: true});
});

gulp.task('browser-sync', ['php'], function() {
    browserSync({
        proxy: 'localhost:8010',
        port: 3000,
        open: true,
        notify: false
    });
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch('./css/stylus/*.styl',['styles', reload]);
    gulp.watch(['./*.php'], [reload]);
});
