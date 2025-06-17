// Construa um programa que peça para informar dois números inteiros. Verifique qual dos dois números é maior e o escreva.

    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("Informe o primeiro número", function(numero1){
        numero1 = Number(numero1)
        rl.question("Informe o segundo número (diferente do primeiro)", function(numero2){
            numero2 = Number(numero2)
            numero1 > numero2? console.log("O primeiro número é maior") : console.log("O segundo número é maior")
            rl.close()
        });
    });