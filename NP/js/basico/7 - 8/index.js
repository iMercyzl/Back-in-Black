function calcular(){
    var numero1 = document.getElementsByName('numero1')[0].value;
    var numero2 = document.getElementsByName('numero2')[0].value;

    var operador = document.querySelector('#operador').value;

    if(operador == '+'){
        var resultado = parseInt(numero1) + parseInt(numero2);
    }else if(operador == '-'){
        var resultado = parseInt(numero1) - parseInt(numero2);
    }else if (operador == '/'){
        var resultado = parseInt(numero1) / parseInt(numero2);
    } else if (operador == '*'){
        var resultado = parseInt(numero1) * parseInt(numero2);
    }

    // console.log(resultado);

    document.querySelector('#resultado').innerHTML = resultado;
}