var Calculadora = /** @class */ (function () {
    function Calculadora(primeiroNumero, segundoNumero) {
        this.PrimeiroNumero = primeiroNumero;
        this.SegundoNumero = segundoNumero;
    }
    Calculadora.prototype.somar = function () {
        return this.PrimeiroNumero + this.SegundoNumero;
    };
    Calculadora.prototype.subtrair = function () {
        return this.PrimeiroNumero - this.SegundoNumero;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.PrimeiroNumero * this.SegundoNumero;
    };
    Calculadora.prototype.dividir = function () {
        return this.PrimeiroNumero / this.SegundoNumero;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(1, 2);
var resultadoSoma = calculadora.somar();
console.log(resultadoSoma);
//# sourceMappingURL=index.js.map