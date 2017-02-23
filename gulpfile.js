const gulp    = require('gulp');
const eslint  = require('gulp-eslint');


gulp.task('eslint', () => {
  return gulp.src(['lib/*.js', 'test/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
