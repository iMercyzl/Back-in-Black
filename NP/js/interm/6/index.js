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

const Alunos = new alunos(todosAlunos);

console.log(Alunos.get());