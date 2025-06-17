// Peça para o vendedor informar o valor do computador que está vendendo e também informar a forma de pagamento que o Cliente procederá para a comopra do equipamento.
// - Se for via (B)Boleto, o cliente terá 3% (3/100) de desconto.
// - Se for via (D)Dinheiro, o cliente terá 5% (5/100) de desconto.
// - Se for via (P)PIX, o cliente terá 10% (10/100) de descconto.
// Calcule e apresente o preço final do computador de acordo com a Forma de Pagamento.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o valor do computador que você está vendendo: ", function(valor){
    valor = Number(valor)
    rl.question("Informe a forma de pagamento: (B)Boleto, (D)Dinheiro, (P)PIX: ", function(pagamento){
        pagamento = pagamento.toUpperCase();

        let pagamentoB = valor - (valor * 0.03);
        let pagamentoD = valor - (valor * 0.05);
        let pagamentoP = valor - (valor * 0.10);

        if (pagamento == "B") {
            console.log(`O preço com desconto é: R$ ${pagamentoB.toFixed(2)}`);
        } else if (pagamento == "D") {
            console.log(`O preço com desconto é: R$ ${pagamentoD.toFixed(2)}`);
        } else if (pagamento == "P") {
            console.log(`O preço com desconto é: R$ ${pagamentoP.toFixed(2)}`);
        } else {
            console.log("Forma de pagamento inválida.");
        }

        rl.close();
    });
});
