var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task("jade", function(){
  return gulp.src(["!src/jade/base.jade", "src/jade/*.jade"])
  .pipe($.jade({ pretty: true }))
  .pipe(gulp.dest("build"))
  .pipe($.size({title: 'jade'}));
});


gulp.task('sass', function(){
  return gulp.src(['src/sass/**/*.scss', 'src/sass/**/*.sass'])
    .pipe($.sass({
      style: 'expanded',
      precision: 10,
      loadPath: ['src/sass']
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('build/css'))
    .pipe($.size({title: 'sass'}));
});


gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/jade', '!src/sass', '!src/jade/**/*', '!src/sass/**/*'])
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'copy'}));
});


gulp.task('server', function(){
  browserSync({
    notify: false,
    server: {
      baseDir: ['build', 'src']
    }
  });

  gulp.watch(['src/jade/**/*.jade'], ['jade', reload]);
  gulp.watch(['src/sass/**/*.scss', 'src/sass/**/*.sass'], ['sass', reload]);
  gulp.watch(['build/css/**/*.css'], reload);
  gulp.watch(['src/img/**/*', 'src/js/**/*'], ['copy', reload]);
});


gulp.task('clean', del.bind(null, ['build']));
gulp.task('default', ['copy', 'jade', 'sass']);
gulp.task('serve', ['default', 'server']);
