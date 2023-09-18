const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function testGulp(cd) {
    console.log("Olá mundo")
    cd()
}

exports.default = styles
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}