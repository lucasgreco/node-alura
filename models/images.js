const conexao = require('../infraestrutura/conexao')

class Image {
    adiciona(image,res) {
        const sql = 'INSERT INTO images SET ?'
        conexao.query(sql, image, (erro) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(image)
            }
        })
    }
    lista(res){
        const sql = 'SELECT * FROM images'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT imagesfile FROM images WHERE id = ${id}`;

        conexao.query(sql, (erro,resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                const image = resultados[0]
                res.status(200).json(image)
            }
        })
    }

    altera(id, valores, res){

        const sql = 'UPDATE images SET ? WHERE id=?'

        conexao.query(sql,[valores,id], (erro,resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    
    deleta(id,res){
        const sql = 'DELETE FROM images WHERE id=?'

        conexao.query(sql,id,(erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Image()