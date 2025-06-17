// Faça um script que peça a idade de uma pessoa e informe se ela já chegou à maioridade.Se ela ainda não chegou, informe quantos anos faltam para a maioridade.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe sua idade: ", function(idade) {
  idade = Number(idade);

  idade >= 18? console.log("Maior de idade") : console.log("Menor de idade")
  rl.close();
});
