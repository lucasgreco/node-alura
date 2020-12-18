module.exports = app => {
    app.get('/atendimentos', (req,res)=>{
        res.send('servidor rodando, tudo ok')
    });

    app.post('/atendimentos', (req,res) => {
        console.log(req.body);
        res.send('Voce esta realizando um post');
    });
}