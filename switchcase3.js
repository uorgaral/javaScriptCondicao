const prompt = require("prompt-sync")();

const codigo = Number(prompt("Insira o código: "));

switch (codigo) {
  case 101:
    console.log("Maçã: R$3/kg");
    break;
  case 102:
    console.log("Melancia: R$5/kg");
    break;
  case 103:
    console.log("Morango: R$20/kg");
    break;
  default:
    console.log("Produto não registrado");
}
