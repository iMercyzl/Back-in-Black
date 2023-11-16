
class aluno {
    constructor(nome, idade, linguagens, experiencia) {
        this.nome = nome;
        this.idade = idade;
        this.linguagens = linguagens;
        this.experiencia = experiencia;

    };

    getAlunos(){
        return {
            nome: this.nome,
            idade: this.idade,
            linguagens: this.linguagens,
            experiencia: this.experiencia
        };
    };

};

class enderecoAluno extends aluno {
    constructor(rua, numero){
        super('pedro', 25, ['JavaScript', 'HTML', 'CSS'], '1 ano');
        this.rua = rua;
        this.numero = numero;
    };

    getTodosOsDados(){
        return {
            ... super.getAlunos(),
            rua: this.rua,
            numero: this.numero,
        }
    }
}