// const aluno = {nome: "Pedro", sobrenome: "Araujo", idade: 25, curso: "Engenharia de Software"};

// function exibirAluno(aluno) {
//     return aluno;
// }

// exibirAluno(aluno);

const aluno = {
    nome: "Pedro",
    sobrenome: "Araujo",
    idade: 25,
    curso: "Engenharia de Software",

    getNome: function() {
        return this.nome;
    },
    getSobrenome: function() {
        return this.sobrenome;
    }
};

// const matricula = {
//     id:1,
//     status: true,

//     getMatricula: function(){
//         return {
//             id: this.id,
//             status: this.status
//         };
//     }
// }


const matricula = function(id, status){
    mId = id;
    mStatus = status;

    this.getId = function(){
        return mId;
    };

    this.getStatus = function(){
        return mStatus;
    }
    
}

// console.log(aluno.getNome());
const novaMatricula = new matricula(1, true);
console.log(novaMatricula.getId(), novaMatricula.getStatus());