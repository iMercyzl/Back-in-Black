
class alunos {
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
            experiencia: this.experiencia,

        };
    };

};

class enderecoAluno extends alunos {
    constructor(rua, numero){
        super(nome, idade, linguagens, experiencia);
        this.rua = rua;
        this.numero = numero;
    };

    getTodosOsDados(){
        return {
            nome: this.nome,
            idade: this.idade,
            linguagens: this.linguagens,
            experiencia: this.experiencia,
            rua: this.rua,
            numero: this.numero,
        }
    }
}