// Peça para o programa perguntar ao usuário quantas viagens foram realizadas por dia e também qual o cargo que ocupa.
// Considere que o valor da diária é de R$ 100,00 (100).
// - Se o usuário ocupar o cargo de "Motorista" e realizou até 10 viagens, haverá um adicional de 20% (20/100);
// - Se o usuário ocupar o cargo de "Motorista" e realizou mais de 10 viagens, haverá um adicional de 35% (35/100);
// - Contudo, se o cargo do usuário for "Cobrador" e realizou até 10 viagens, não haverá adicional. Se o usuário ocupar o cargo de "Cobrador" e realizou mais de 10 viagens, haverá um adicional de 10% (10/100)
// Apresente em tela o cargo do usuário e também o valor final recebido pelas viagens realizadas.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const diariaBase = 100;
const aumentoVinte = 20 / 100;
const aumentoTrintaECinco = 35 / 100;
const aumentoDez = 10 / 100;

rl.question("Informe quantas viagens você realizou por dia: ", function (viagens) {
    viagens = Number(viagens);

    rl.question("Informe qual é o seu cargo (Motorista ou Cobrador): ", function (cargo) {
        cargo = cargo.trim();

        let valorFinal = diariaBase;

        if (cargo === "Motorista") {
            if (viagens <= 10) {
                valorFinal += diariaBase * aumentoVinte;
            } else {
                valorFinal += diariaBase * aumentoTrintaECinco;
            }
        } else if (cargo === "Cobrador") {
            if (viagens > 10) {
                valorFinal += diariaBase * aumentoDez;
            }
        } else {
            console.log("Cargo inválido.");
            rl.close();
            return;
        }

        console.log(`Seu cargo: ${cargo}`);
        console.log(`Valor final recebido: R$ ${valorFinal.toFixed(2)}`);

        rl.close();
    });
});

