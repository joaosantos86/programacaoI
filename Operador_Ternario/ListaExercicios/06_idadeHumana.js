// É sabido que os caẽs amadurecem mais rapidamente do que os seres humanos (na verdade, alguns seres humanos parecem nunca amadurecer).

// Calcule a idade do seu cão, baseada nos seguintes fatores:
// - Cães de porte pequeno: fator 5;
// - Cães de porte médio: fator 6;
// - Cães grandes: fator 7.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe a idade do seu cão (em anos): ", function(idade) {
  idadeCao = Number(idade);

  rl.question("Informe o porte do seu cão (P - pequeno, M - médio, G - grande): ", function(porte) {
    fator = (porte === "P") ? 5 :
            (porte === "M") ? 6 :
            (porte === "G") ? 7 :
            0;

    idadeHumana = idadeCao * fator;

    fator
      ? console.log(`Idade do seu cão em anos humanos: ${idadeHumana.toFixed(1)} anos`)
      : console.log("Porte inválido. Use apenas P, M ou G (maiúsculos).");

    rl.close();
  });
});
