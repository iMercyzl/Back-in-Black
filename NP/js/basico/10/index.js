const emailCerto = 'teste@teste.com';
const senhaCerta = '123456';

function verificar(){

    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;

    if(email != '' && senha != ''){

        var resultado = this.login(email, senha);

        if (resultado == true){
            alert('Login realizado com sucesso');
        }else{
            alert('Email ou senha incorretos');
        }

    }else{
        alert('Preencha os campos');
    }

}

function login(email, senha){
 
    if(email == emailCerto && senha == senhaCerta){
        return true;
    }else{
        return false;
    }
}