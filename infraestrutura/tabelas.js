class Tabelas{
    init(conexao){
        this.conexao = conexao
        console.log('tabelas foram chamadas');
        // this.criarAtendimentos()
        // this.criarPets()
        this.criarImagens();
    }

    criarImagens(){
        const sql = "CREATE TABLE IF NOT EXISTS images (idimages int NOT NULL AUTO_INCREMENT, imagesfile blob NOT NULL, imageshorizontal tinyint DEFAULT '0',imagesdesc mediumtext, PRIMARY KEY (idimages)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;";

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            } else{
                console.log('tabela criada com sucesso');
            }
        });
    }


    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL,data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))';

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            } else{
                console.log('tabela criada com sucesso');
            }
        });
    }

    criarPets(){
        const sql = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            } else {
                console.log('tabela pets criada com sucesso');
            }
        })
    }
}
module.exports = new Tabelas