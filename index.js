const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
//realiza conexao com mysql
conexao.connect(erro => {
    if(erro){
        //falha de conexao com o banco de dados
        console.log(erro);
        console.log('deu pau');
    }else{
//apenas sobe o servidor em caso de sucesso ao conectar com banco de dados.

        //carrega script tabelas
        Tabelas.init(conexao);
        //carrega as configuraçoes do servidor(includes)
        const app = customExpress();

        //servidor live escutando na porta 3000
        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
})
