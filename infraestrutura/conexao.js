const mysql = require('mysql');

//cria a conexao com o banco mysql em questao
const conexao = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user:'root',
    password:'bolha123',
    database:'jade-webportfolio'
})

//exporta a conexao
module.exports = conexao