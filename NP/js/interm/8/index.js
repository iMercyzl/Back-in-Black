function buscarVelocidadeAtual(){

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            resolve(100);

        }, 6000);

        setTimeout(function(){

            console.log(`Acessando equipamento de cálculo!`);



        }, 2000);

        setTimeout(function(){

            console.log(`Calculando e processando informações obtidas!`);

        }, 4000);

    })

};


const result = buscarVelocidadeAtual();

result.then(function(velocidade) {

    console.log(`Velocidade atual: ${velocidade} km/h`);

}).catch(function(){

    console.log(`Erro ao obter velocidade atual!`);

});