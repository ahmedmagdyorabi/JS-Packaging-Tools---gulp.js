const{ src, dest, parallel, series ,watch } = require('gulp')

const HTMLMin=require('gulp-htmlmin')
function htmlTask(){
    return src('src/*.html')
    .pipe(HTMLMin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest('dist'))
}
// exports.default=htmlTask


const imgMin=require('gulp-imagemin')
function imgTask(){
    return src('src/pics/*')
    .pipe(imgMin())
    .pipe(dest('dist/images'))
}
// exports.img=imgTask

const cssMin=require('gulp-clean-css')
const concat = require('gulp-concat')
function cssTask(){
    return src('src/*.css')
    .pipe(concat('Terms & Comditions.min.css'))
    .pipe(cssMin())
    .pipe(dest('dist/css'))
}
// exports.css=cssTask



const jsMin=require('gulp-terser')
function jsTask(){
    return src('src/*.js')
    .pipe(jsMin())
    .pipe(dest('dist/js'))
}
exports.js=jsTask

function watchTask(){
    watch(['src/*.css','src/pics/*'],{interval:3000},parallel(cssTask))

}




// exports.default=series(jsTask,cssTask,htmlTask,imgTask)
exports.default=series(parallel(cssTask,htmlTask,imgTask),watchTask)

