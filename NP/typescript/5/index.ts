class Calculadora {

    PrimeiroNumero: number;
    SegundoNumero: number;

    constructor(primeiroNumero: number, segundoNumero: number) {
        this.PrimeiroNumero = primeiroNumero;
        this.SegundoNumero = segundoNumero;
    }

    somar(): number {
        return this.PrimeiroNumero + this.SegundoNumero;

    }

    subtrair(): number {
        return this.PrimeiroNumero - this.SegundoNumero;

    }

    multiplicar(): number { 
        return this.PrimeiroNumero * this.SegundoNumero;

    }

    dividir(): number {
        return this.PrimeiroNumero / this.SegundoNumero;

    }

}

const calculadora = new Calculadora(1, 2);
const resultadoSoma = calculadora.somar();

console.log(resultadoSoma);