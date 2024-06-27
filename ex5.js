const prompt = require("prompt-sync")();
const salario = Number(prompt("Digite seu salário: "));
let calculo;

if (salario <= 2112) {
  console.log("ISENTO");
} else if (salario >= 2.112 && salario < 2826.65) {
  calculo = (salario * 7.5) / 100;
  console.log("Pagará 7.5%", "O valor do imposto é: R$" + calculo);
} else if (salario >= 2826.65 && salario < 3751.5) {
  calculo = (salario * 15) / 100;
  console.log("Pagará 15%", "O valor do imposto é: R$" + calculo);
} else if (salario >= 3751.6 && salario <= 4664.68) {
  calculo = (salario * 22.5) / 100;
  console.log("Pagará 22.5%", "O valor do imposto é: R$" + calculo);
} else {
  calculo = (salario * 27.5) / 100;
  console.log("Pagará 27.5%", "O valor do imposto é: R$" + calculo);
}
