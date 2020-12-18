const Atendimento = require('../models/atendimentos')

module.exports = app => {

    //seta um get no caminho /atendimentos
    app.get('/atendimentos', (req,res)=>{
        Atendimento.lista(res)
    });

    //seta um get no caminho /atendimentos
    app.get('/atendimentos/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id,res)
    });

    //seta um post no caminho /atendimentos
    app.post('/atendimentos', (req,res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento,res)
    });

    app.patch('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}