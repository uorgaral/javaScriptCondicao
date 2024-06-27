const prompt = require("prompt-sync")();
const anouser = Number(prompt("Digite um ano: "));

if (anouser % 4 == 0 && anouser % 400 == 0) {
  console.log("É um ano bissexto");
} else {
  console.log("Não é bissexto");
}
