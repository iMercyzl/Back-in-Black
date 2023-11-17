const Alunos = new alunos(todosAlunos);

console.log(Alunos.get());

setTimeout(() => {
    Alunos.set({
        nome: 'jose',
        sobrenome: 'perset',
        idade: 26,
        linguagens: ['JavaScript', 'HTML', 'CSS', 'a porra toda'],
        experiencia: 5,
        data: '2022-02-19'
    });

    Alunos.update({
        nome: 'otavio',
        sobrenome: 'redondo',
        idade: 27,
        linguagens: ['jogos eletrinicos'],
        experiencia: 1,
        data: '2022-02-19'
    }, 1);

    console.log(Alunos.get());

    setTimeout(() => {
        Alunos.delete(1);
        console.log(Alunos.get());
    }, 3000);

    console.log(Alunos.getByIndex(3),);

}, 2000);