// Faça um script que pergunte ao funcionário quanto recebe de salário por mês.
// O programa deverá perguntar ao profissional se ele deseja receber auxílio transporte e deverá perguntar se ele utiliza veículo próprio para se locomover ao trabalho.
// Se o funcionário deseja receber auxílio transporte ou utiliza veículo próprio, deverão ser descontados 6% (0.06) da remuneração mensal informada pelo funcionário.
// Ainda, se utilizar veículo próprio, a empresa fornecerá um adicional de R$ 200,00 ou, caso utilize apenas o transporte público, a empresa fornecerá um adicional de R$ 150,00.
// Calcule e apresente em tela o desconto, se existente, e o salário final recebido pelo funcionário.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quanto você recebe por mês: ", function (salarioBase) {
    salarioBase = Number(salarioBase);

    rl.question("Você deseja receber auxílio transporte? 0 - Não | 1 - Sim: ", function (temAuxilio) {
        temAuxilio = Number(temAuxilio);

        rl.question("Você utiliza veículo próprio para se locomover ao trabalho? 0 - Não | 1 - Sim: ", function (veiculo) {
            veiculo = Number(veiculo);

            let desconto = 0;
            let adicional = 0;

            if (temAuxilio === 1 || veiculo === 1) {
                desconto = salarioBase * 0.06;
            }

            if (veiculo === 1) {
                adicional = 200;
            } else {
                adicional = 150;
            }

            let salarioFinal = salarioBase - desconto + adicional;

            console.log(`O desconto é R$ ${desconto.toFixed(2)} e o salário final é R$ ${salarioFinal.toFixed(2)}`);

            rl.close();
        });
    });
});
