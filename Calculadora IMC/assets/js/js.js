function calcularIMC() {
    const alturaCentimetros = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    if (!isNaN(alturaCentimetros) && !isNaN(peso) && alturaCentimetros > 0 && peso > 0) {
        // Converter altura de centímetros para metros
        const alturaMetros = alturaCentimetros / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        document.getElementById("resultado").textContent = imc.toFixed(2);
    } else {
        alert("Por favor, insira valores válidos para altura e peso.");
    }
}