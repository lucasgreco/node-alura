const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = () => {

    const app = express();
    //body parser é usado para entender json nas reqs
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    //consign usa para carregar todos os controllers para dentro do app 
    consign()
        .include('controllers')
        .into(app);

    return app;
}