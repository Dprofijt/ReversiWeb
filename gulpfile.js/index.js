const config = require('./config');
const {localServerProjectPath} = require("./config");

const js = require('./tasks/js').js(config.voornaam, config.localServerProjectPath, config.files.js, config.files.jsOrder);
js.displayName = 'js';

const sass = require('./tasks/sass').sass(config.localServerProjectPath, config.files.css);
sass.displayName = 'sass';

const hello = function (done) {
    console.log(`Groeten aan ${config.voornaam} van Gulp!`)
    done();
}

exports.default = hello;
exports.js = js;
exports.sass = sass;