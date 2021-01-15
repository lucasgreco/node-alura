const conexao = require('../infraestrutura/conexao')

class Pet {
    adiciona(pet,res) {
        const sql = 'INSERT INTO Pets SET ?'
        conexao.query(sql, pet, (erro) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(pet)
            }
        })
    }
    consulta(res){
        const sql = 'SELECT * FROM Pets'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Pet()