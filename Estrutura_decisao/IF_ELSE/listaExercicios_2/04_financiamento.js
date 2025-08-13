// Faça um script que pergunte o valor de um imóvel, em quantos anos será realizado o financiamento e também o salário do comprador. O script deverá calcular e mostrar o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o financiamento será negado.
// Calcule e apresente o valor da parcela ao final do programa e informe se o financiamento foi ou não concedido ao interessado.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o valor do Imóvel: ", function(valorImovel) {
    valorImovel = Number(valorImovel);
    rl.question("Informe em quantos anos será realizado o financiamento: ", function(anos) {
        anos = Number(anos);
        rl.question("Por ultimo, informe seu salário: ", function(salario) {
            salario = Number(salario);
            const salarioTrinta = salario * (30 / 100);
            const financiamento = valorImovel / (anos * 12);

            if (financiamento <= salarioTrinta) {
                console.log("O valor da prestação é " + financiamento);
            } else {
                console.log("Seu financiamento foi negado");
            }
            rl.close();
        });
    });
});

