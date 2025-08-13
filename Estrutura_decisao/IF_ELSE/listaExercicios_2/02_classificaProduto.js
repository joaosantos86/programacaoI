// Faça um script que peça para o usuário informar o código de um determinado produto e mostre a sua classificação, considerando os seguintes dados de entrada e a sua mensagem correspondente:
// - Código 1: Alimento não-perecível
// - Código 2, 3 ou 4: Alimento perecível
// - Código 5 ou 6: Vestuário
// - Código 7: Higiene Pessoal
// - Código 8 até 15: Limpeza e Utensílios Domésticos
// - Código 16 até 20: Outros
// - Qualquer outro código: Código inválido
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Informe o código do produto: ", function(codigo) {
  codigo = Number(codigo)

  if (codigo === 1) {
    console.log("Alimento não-perecível")
  } else if (codigo === 2 || codigo === 3 || codigo === 4) {
    console.log("Alimento perecível")
  } else if (codigo === 5 || codigo === 6) {
    console.log("Vestuário")
  } else if (codigo === 7) {
    console.log("Higiene Pessoal")
  } else if (codigo >= 8 && codigo <= 15) {
    console.log("Limpeza e Utensílios Domésticos")
  } else if (codigo >= 16 && codigo <= 20) {
    console.log("Outros")
  } else {
    console.log("Código inválido")
  }

  rl.close()
})
