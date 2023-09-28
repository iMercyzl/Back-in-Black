
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("gastos-form");
    const mesSelector = document.getElementById("mes");
    const anoInput = document.getElementById("ano");
    const saldoInicialMes = document.getElementById("saldo-inicial");
    const saldoAtual = document.getElementById("saldo-atual");
    const tabelaResumo = document.getElementById("tabela-resumo").getElementsByTagName('tbody')[0];
    let mesCorrente = "";
    let anoCorrente = "";
    let saldoInicial = 0;
    let gastos = [];
    let resumoMensal = [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const mes = mesSelector.value;
        const ano = anoInput.value;
        const descricao = document.getElementById("descricao").value;
        const valor = parseFloat(document.getElementById("valor").value);

        if (!isNaN(valor) && valor !== 0) {
            if (mes !== mesCorrente || ano !== anoCorrente) {
                // Nova entrada para um novo mês ou ano
                mesCorrente = mes;
                anoCorrente = ano;
                saldoInicial = parseFloat(saldoInicialMes.value) || 0;
                gastos = [];
            }

            const gasto = {
                descricao: descricao,
                valor: valor
            };

            gastos.push(gasto);

            // Limpa os campos de entrada
            document.getElementById("descricao").value = "";
            document.getElementById("valor").value = "";

            // Atualiza a lista de gastos e o resumo mensal
            atualizarListaGastos();
        } else {
            alert("Por favor, insira um valor válido diferente de zero.");
        }
    });

    function atualizarListaGastos() {
        const totalGastos = gastos.reduce((total, gasto) => total + gasto.valor, 0);
        const saldoFinal = saldoInicial - totalGastos;
        saldoAtual.textContent = saldoFinal.toFixed(2);

        // Atualiza a tabela de resumo mensal
        const mes = mesSelector.value;
        const ano = anoInput.value;

        const mesAno = `${mes} ${ano}`;
        const saldoInicialFormatado = saldoInicial.toFixed(2);
        const saldoFinalFormatado = saldoFinal.toFixed(2);

        let encontrado = false;

        resumoMensal.forEach((item, index) => {
            if (item.mesAno === mesAno) {
                resumoMensal[index].saldoFinal = saldoFinalFormatado;
                encontrado = true;
            }
        });

        if (!encontrado) {
            resumoMensal.push({ mesAno, saldoInicial: saldoInicialFormatado, saldoFinal: saldoFinalFormatado });
        }

        // Limpa a tabela de resumo e a preenche novamente
        tabelaResumo.innerHTML = "";
        resumoMensal.forEach(item => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${item.mesAno}</td>
                <td>R$ ${item.saldoInicial}</td>
                <td>R$ ${item.saldoFinal}</td>
            `;
            tabelaResumo.appendChild(tr);
        });
    }
});