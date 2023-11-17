const todosAlunos = [
    {
        nome: 'Pedro',
        sobrenome: 'Araujo',
        idade: 25,
        linguagens: ['JavaScript', 'HTML', 'CSS'],
        experiencia: 1,
        data: '2022-02-19'
    },
    {
        nome: 'ana',
        sobrenome: 'Araujo',
        idade: 25,
        linguagens: ['JavaScript', 'HTML', 'CSS'],
        experiencia: 1,
        data: '2022-02-19'
    },
    {
        nome: 'vitor',
        sobrenome: 'Araujo',
        idade: 25,
        linguagens: ['JavaScript', 'HTML', 'CSS'],
        experiencia: 1,
        data: '2022-02-19'
    },
    {
        nome: 'paulo',
        sobrenome: 'Araujo',
        idade: 25,
        linguagens: ['JavaScript', 'HTML', 'CSS'],
        experiencia: 1,
        data: '2022-02-19'
    },
];   

class alunos {
    constructor(allAlunos){
        this.allAlunos = allAlunos;
    };

    get(){
        return this.allAlunos
    }

    getByIndex(index){
        return todosAlunos[index];
    }

    set(dadosAluno){
        todosAlunos.push(dadosAluno);
    }

    update(dadosAluno, index){
        todosAlunos[index] = dadosAluno;
    }

    delete(index){
        delete todosAlunos[index];
    }

}

