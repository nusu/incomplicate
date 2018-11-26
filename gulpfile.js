var gulp           =  require('gulp'),
    uglify         =  require('gulp-uglify'),
    plumber        =  require('gulp-plumber'),
    concat         =  require('gulp-concat');

// js task
// uglify all of the js files in spesific folder
// you can improve this with watch task.
gulp.task('jsconcat', function(){
    gulp.src(['js/j.js', 'js/h.js', 'js/viewport-units-buggyfill.js', 'js/viewport-units-buggyfill.hacks.js', 'js/g.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('destruction.min.js'))
        .pipe(gulp.dest('./js/'));
});

