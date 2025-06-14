   /*
    PROBLEMA: AVISO SOBRE TEMPERATURA
    Faça um script que peça para o usuário informar o valor de uma temperatura em graus Celsius. 
    - Caso a temperatura esteja abaixo de 100 graus Celsius, o programa deverá apresentar a mensagem "Está muito baixa!";
    - Caso a temperatura esteja até 200 graus Celsius (inclusive), deverá apresentar a mensagem "Está baixa!";
    - Se estiver acima de 200 graus Celsius e inferior a 500 graus Celsius, deverá apresentar a mensagem "Está normal!";
    - Contudo, caso esteja acima de 500 graus Celsius, deverá apresentar a mensagem "Está muito alta!".
    */

    //ENTRADA
// PROBLEMA: AVISO SOBRE TEMPERATURA
// Faça um script que peça para o usuário informar o valor de uma temperatura em graus Celsius:
// - Caso a temperatura esteja abaixo de 100 graus Celsius, o programa deverá apresentar a mensagem "Está muito baixa!";
// - Caso a temperatura esteja até 200 graus Celsius (inclusive), deverá apresentar a mensagem "Está baixa!";
// - Se estiver acima de 200 graus Celsius e inferior a 500 graus Celsius, deverá apresentar a mensagem "Está normal!";
// - Contudo, caso esteja acima de 500 graus Celsius, deverá apresentar a mensagem "Está muito alta!";

// ENTRADA
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe a temperatura em graus Celsius: ', (input) => {
  const temperatura = Number(input);

  if (isNaN(temperatura)) {
    console.log("Por favor, informe um número válido!");
    rl.close();
    return;
  }

  if (temperatura < 100) {
    console.log("Está muito baixa!");
  } else if (temperatura <= 200) {
    console.log("Está baixa!");
  } else if (temperatura < 500) {
    console.log("Está normal!");
  } else {
    console.log("Está muito alta!");
  }

  rl.close();
});




    //PROCESSAMENTO

    
    //SAÍDA