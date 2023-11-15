const arvore = function(tipoArvore, tamanhoFruta){

    aTipoArvore= tipoArvore;
    aTamanhoFruta= tamanhoFruta;

    this.getTipoFruta = function(){
        if(aTipoArvore == "macieira") {
            console.log("pegar uma maçã de tamanho " + aTamanhoFruta);
        }else if(aTipoArvore == "laranjeira"){
            console.log("pegar uma laranja de tamanho " + aTamanhoFruta);
        };
    };

    this.pagar = function(dinheiro){
        console.log("obrigado pelo pagamento de " + dinheiro + " reais");
    }
}

const vendedor = new arvore("laranjeira", "medio");

vendedor.getTipoFruta();
vendedor.pagar(10);