// const aluno = function(nome, idade, linguagens, experiencia) {

//     aNome = nome;
//     aIdade = idade;
//     aLinguagens = linguagens;
//     aExperiencia = experiencia;

//     this.getAluno = function() {
//         return {
//             nome: aNome,
//             idade: aIdade,
//             linguagens: aLinguagens,
//             experiencia: aExperiencia,

//         };
//     };

//     this.setAluno = function() {
//         console.log(`Enviar para o banco de dados todas as informações do aluno.`)
//     };

//     this. updateAluno = function() {
//         console.log(`Enviar os dados para o banco de dados atualizar o aluno!`)
//     };

//     this.deleteAluno = function(id) {
//         console.log(`Enviar o ID para o banco de dados e excluir o aluno`)
//     }

// };




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
    }

};

const aluno = new alunos();