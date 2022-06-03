const {src,dest} = require('gulp');
const webp = require('gulp-webp');

function versionWebp(done){

    const opciones = {
        quality:50
    };
        src('src/imagenes/*.jpg')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))

    done();
}
exports.versionWebp = versionWebp;