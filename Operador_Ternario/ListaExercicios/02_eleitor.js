// Considerando que no Brasil é possível votar a partir dos 16 anos de idade, faça um script que peça o ano de nascimento de uma pessoa e informe se ela poderá votar no ano atual. Ignore mês e dia de nascimento.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe seu ano de nascimento", function(nascimento){
    nascimento = Number(nascimento)
    nascimento <= 2009 ? console.log("Você ja pode voltar") : console.log("Você não pode votar")
    rl.close()
})