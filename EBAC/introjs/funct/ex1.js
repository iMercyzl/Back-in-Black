function calculoMedia ( notas ) {
    var soma = 0;
    for ( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;
    return media;
}

function aprovacao (media) {
    let condicao = media >= 7 ? 'aprovado' : 'reprovado';

    return condicao;
}
console.log( calculoMedia([8, 8]) + aprovacao (calculoMedia([8,8])))
console.log(`A media do aluno é ${calculoMedia([9, 7, 5, 1, 10])} entao esta ${aprovacao(calculoMedia([9, 7, 5, 1, 10]))}`)