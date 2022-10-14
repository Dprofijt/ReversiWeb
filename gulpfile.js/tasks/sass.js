const {src, dest} = require('gulp');
const concat = require("gulp-concat");
const gulpSass = require('gulp-sass')(require('sass'));

const sass = function (serverProjectPath, files_sass){
    return function (){
        return src(files_sass)
            .pipe(gulpSass().on('error', gulpSass.logError))
            .pipe(dest('./dist/sass'))
            .pipe(concat('style.min.css'))
            .pipe(dest('./dist/css'))
            .pipe(dest(serverProjectPath));
    }
}

exports.sass = sass;
