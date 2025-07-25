// Faça um script que peça para o usuário informar o valor do seu salário. O script deverá calcular e mostrar o valor do aumento e o valor do novo salário. Considere que, caso seu salário seja menor ou igual a R$ 2.000,00 o reajuste será de 15%. Caso seja maior que R$ 2.000,00 o reajuste será de 10%. Ainda, sendo maior que R$ 4.000,00 o reajuste será de 7,5%. Por fim, caso seja maior que R$ 7.000,00 o reajuste será de 5%.
// Calcule e apresente o salário final de acordo com o reajuste obtido.
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Informe seu salário: ", function(salario) {
    salario = Number(salario)
    if (salario <= 2000) {
        aumento = salario * (15 / 100)
        novoSalario = aumento + salario
    } else if (salario > 2000 && salario < 4000) {
        aumento = salario * (10 / 100)
        novoSalario = aumento + salario
    } else if (salario >= 4000 && salario <= 7000) {
        aumento = salario * (7.5 / 100)
        novoSalario = aumento + salario
    } else if (salario > 7000) {
        aumento = salario * (5 / 100)
        novoSalario = aumento + salario
    }
    console.log("seu novo salário é: " + novoSalario)
    rl.close()
})