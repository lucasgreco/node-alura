const Imagem = require('../models/images')

module.exports = app => {

    //seta um get no caminho /atendimentos
    app.get('/images', (req,res)=>{
        Imagem.lista(res)
    });

    //seta um get no caminho /atendimentos
    app.get('/images/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        Imagem.buscaPorId(id,res)
    });

    //seta um post no caminho /atendimentos
    app.post('/images', (req,res) => {
        const atendimento = req.body

        Imagem.adiciona(atendimento,res)
    });

    app.patch('/images/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Imagem.altera(id, valores, res)
    })

    app.delete('/images/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Imagem.deleta(id, res)
    })
}