// Construa um programa que peça para o usuário informar um caractere e apresente a mensagem descrevendo se este caractere é uma vogal.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe UM caractere: ", function(caractere) {
  const mensagem = 
    (caractere === 'a' || caractere === 'A' ||
     caractere === 'e' || caractere === 'E' ||
     caractere === 'i' || caractere === 'I' ||
     caractere === 'o' || caractere === 'O' ||
     caractere === 'u' || caractere === 'U')
    ? "O caractere é uma vogal."
    : "O caractere NÃO é uma vogal.";

  console.log(mensagem);
  rl.close();
});
