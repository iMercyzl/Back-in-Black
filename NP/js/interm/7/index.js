const aulas = [
    {
        id: 1,
        nome: "JSON",
        descricao: "Aula sobre JSON",
        data: '17/11/2023'
    }
];

const aulasJSON = JSON.stringify(aulas);

const aulasObjeto = JSON.parse(aulasJSON);

console.log(aulasObjeto);