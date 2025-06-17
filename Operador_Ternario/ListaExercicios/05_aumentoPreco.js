// Peça para o usuário informar o preço do produto e calcule o aumento do preço, baseado no seguinte critério:
// - até 280(inclusive): aumento de 20 %
// - até 700(inclusive): aumento de 15 %
// - até 1500(inclusive): aumento de 10 %
// - acima de 1500: aumento de 5 %

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe o preço do produto: R$ ", function(preco) {
  const valor = parseFloat(preco);

  const percentual = (valor <= 280) ? 0.20 :
                     (valor <= 700) ? 0.15 :
                     (valor <= 1500) ? 0.10 :
                     0.05;

  const aumento = valor * percentual;
  const novoPreco = valor + aumento;

  console.log(`Preço original: R$ ${valor.toFixed(2)}`);
  console.log(`Percentual de aumento: ${(percentual * 100).toFixed(0)}%`);
  console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
  console.log(`Novo preço: R$ ${novoPreco.toFixed(2)}`);

  rl.close();
});
