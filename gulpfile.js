var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync').create();

gulp.task('build', function() {
  return gulp.src("source/sass/style.scss")    
		.pipe(sass())
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task('serve', ['build'], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ['build']);
  gulp.watch("source/*.html").on('change', server.reload);
});