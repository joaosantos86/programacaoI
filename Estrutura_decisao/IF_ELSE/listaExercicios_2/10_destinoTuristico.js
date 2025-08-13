// Peça para o usuário informar o preço do transporte aéreo para dois destinos de viagem (São Paulo, Rio de Janeiro). Peça também para informar o preço do hotel para os dois destinos (São Paulo, Rio de Janeiro) e quantos dias pretende ficar no destino.
// Calcule o custo final para cada um e apresente a melhor decisão, considerando que o destino pretendido será o com custo final mais baixo.
// Apresente o destino final e o custo final da viagem para o destino.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o preço do transporte aéreo para São Paulo: ", function(transporteSP) {
    transporteSP = Number(transporteSP);

    rl.question("Informe o preço do transporte aéreo para o Rio de Janeiro: ", function(transporteRJ) {
        transporteRJ = Number(transporteRJ);

        rl.question("Informe o valor do hotel por dia em São Paulo: ", function(hotelSP) {
            hotelSP = Number(hotelSP);

            rl.question("Informe o valor do hotel por dia no Rio de Janeiro: ", function(hotelRJ) {
                hotelRJ = Number(hotelRJ);

                rl.question("Quantos dias pretende ficar no destino?: ", function(qtdDias) {
                    qtdDias = Number(qtdDias);

                    let totalSP = transporteSP + (hotelSP * qtdDias);
                    let totalRJ = transporteRJ + (hotelRJ * qtdDias);

                    if (totalSP < totalRJ) {
                        console.log(`Destino recomendado: São Paulo. Custo total: R$ ${totalSP.toFixed(2)}`);
                    } else if (totalRJ < totalSP) {
                        console.log(`Destino recomendado: Rio de Janeiro. Custo total: R$ ${totalRJ.toFixed(2)}`);
                    } else {
                        console.log(`Ambos os destinos têm o mesmo custo: R$ ${totalSP.toFixed(2)}`);
                    }

                    rl.close();
                });
            });
        });
    });
});
