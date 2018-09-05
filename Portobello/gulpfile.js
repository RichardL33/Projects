const gulp = require('gulp');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const scssFiles = ['./assets/scss/**/*.scss'];
const scssMain = ['./assets/scss/main.scss'];
const pathStyleDest = './assets/css';

const jsFiles = ['./assets/js/*.js'];

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// SASS
gulp.task('style', function () {
  return gulp.src(scssMain)
    .pipe(plumber({errorHandler: notify.onError("Style Build Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer('last 4 version'))
    .pipe(sourcemaps.write())
    .on('error', onError)
    .pipe(gulp.dest(pathStyleDest))
    .pipe(browserSync.stream());
});

gulp.task('style-build', function () {
  return gulp.src(scssMain)
    .pipe(plumber({errorHandler: notify.onError("Style Build Error: <%= error.message %>")}))
    .pipe(sass())
    .on('error', onError)
    .pipe(autoprefixer('last 4 version'))
    .pipe(cssnano())
    .pipe(gulp.dest(pathStyleDest));
});

// Watcher
gulp.task('watch', () => {
  browserSync.init({
      server: './'
  });
  gulp.watch(scssFiles, function(){
    runSequence('style', ['notify']);
  });
  gulp.watch(scssFiles, ['style']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch(jsFiles).on('change', browserSync.reload);
});

// Build for prod
gulp.task('build', function(callback) {
  runSequence(['style-build'], callback)
});

// Default
gulp.task('default', done => {
  runSequence(['style', 'watch'], done);
});

///////////////////////////////////////////////////////////
// Helpers
function onError(error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('notify', function () {
  return gulp.src('')
    .pipe(notify({message: 'DRAKARYS!!!', onLast: true}));
});
