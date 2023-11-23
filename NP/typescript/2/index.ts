type Id = number;

function pessoa (id: Id, nome: string, idade: number): object {
    return {
        id,
        nome,
        idade,
    }
}