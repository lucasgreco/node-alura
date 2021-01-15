const fs = require('fs')

fs.createReadStream('./assets/gatinha.jfif')
    .pipe(fs.createWriteStream('./assets/gatinha3-stream.jfif'))
    .on('finish', ()=>{
        console.log('img foi escrita');
    })