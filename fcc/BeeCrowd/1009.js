var a = String("João");
var b = parseFloat(500.00);
var c = parseFloat(1230.30);

var salario = (b + (c * 0.15));

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);