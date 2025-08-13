// Peça para o Professor informar quantos anos de carreira possui. Peça também para que o Professor informe a quantidade de Projetos de Pesquisa que já coordenou. Também peça para que informe a quantidade de Projetos de Extensão que orientou. Por último, peça para informar a quantidade de TCCs que já orientou.

// - Considere que cada ano de carreira equivale 2.5 pontos;
// - Considere que cada Projeto de Pesquisa equivale a 5 pontos;
// - Considere que cada Projeto de Extensão equivale a 5 pontos;
// - Considere que cada TCC equivale a 3 pontos.

// Como resultado do cálculo das pontuações, a classificação poderá ser:
// - Se o Professor possuir até 30 pontos (inclusive), será considerado "CONVIDADO";
// - Se o Professor possuir até 50 pontos, será considerado "AGREGADO";
// - Se o Professor possuir mais de 50 pontos, será considerado "TITULAR".

// Calcule os pontos e apresente a classificação do Professor.


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pontos = 0;

rl.question("Olá professor, quantos anos de carreira o Sr. Possui?", function (anos) {
    anos = Number(anos)
    rl.question("Informe também quantos Projetos de Pesquisa você ja coordenou.", function (projetosPesquisa) {
        projetosPesquisa = Number(projetosPesquisa)
        rl.question("Agora, Informe quantos Projetos de Extensão que você orientou.", function (projetosExtensao) {
            projetosExtensao = Number(projetosExtensao)
            rl.question("Por ultimo, informe quantos TCCs que você ja orientou.", function (tccs) {
                tccs = Number(tccs)

                //calculos

                pontos += anos * 2.5;
                pontos += projetosPesquisa * 5;
                pontos += projetosExtensao * 5;
                pontos += tccs * 3;


                // processamento
                if (pontos < 0) {
                    console.log("Melhore e tente novamente!")
                } else if (pontos <= 30) {
                    console.log("Convidado")
                } else if (pontos <= 50) {
                    console.log("Agregado")
                } else if (pontos > 50) {
                    console.log("Titular")
                }

                rl.close()
            })
        })
    })
})
