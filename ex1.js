const prompt = require("prompt-sync")();
const idade = Number(prompt("DIGITE SUA IDADE: "));

if (idade >= 18) {
  console.log("pode dirigir, mano vin diesel");
} else {
  console.log("espera um pouco, irmão");
}
