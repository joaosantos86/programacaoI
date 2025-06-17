// Faça um script que pergunte ao usuário qual a distância da viagem, em quilômetros. Peça também para o usuário informar quantos quilômetros pretende viajar por dia. Calcule quantos dias serão necessários para realizar a viagem. Considere o seguinte cenário:
// - Se a viagem demorar até três dias (inclusive), poderá ser realizada em "Qualquer Período";
// - Se a viagem demorar até 10 dias (inclusive), poderá ser realizada nas "Férias de Julho";
// - Se a viagem demorar até 20 dias (inclusive), poderá ser realizada nas "Férias de Verão";
// - Se a viagem demorar mais de 20 dias, indique que o usuário "Deverá Trabalhar Remoto".
// Apresente o resultado correspondente com os dias de duração da viagem.

const readline = require("readline")

const rl = readline.createInterface ({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Informe a distância da viagem em quilômetros", function(distancia){
    distancia = Number(distancia)
    rl.question("Informe quantos quilometros pretende viajar por dia", function(kmPorDia){
        kmPorDia = Number(kmPorDia)

        tempo = distancia / kmPorDia

        if (tempo <= 3) {
            console.log("Qualquer Período")
        } else if (tempo <= 10) {
            console.log("Férias de Julho")
        } else if (tempo <= 20) {
            console.log("Férias de Verão")
        } else if (tempo > 20) {
            console.log("É recomendavel que você trabalhe remotamente")
        }

        console.log(`A viagem vai durar aproximadamente ${tempo.toFixed(1)} dias.`);

        rl.close()
    })
})