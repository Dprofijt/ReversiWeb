const {src, dest} = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const fn = function (voornaam, localServerProjectPath, filesJs, filesJsOrder) {
    return function () {

        //console.log(`Taak js is uitgevoerd, ${voornaam}!`);
        //return Promise.resolve('Klaar');

        // return src('js/*.js')
        //     .pipe(dest('dist'))
        //     .pipe(dest(localServerProjectPath));
        return src(filesJs)
            .pipe(order(filesJsOrder, {base: './'}))
            .pipe(concat('app.js'))
            .pipe(babel({
                presets: ['@babel/preset-env']
            }))
            .pipe(dest('./dist/js'))
            .pipe(dest(localServerProjectPath));

                }
                };
                exports.js = fn;