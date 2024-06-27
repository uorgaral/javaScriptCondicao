const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite sua nota: "));

switch (true) {
  case nota <= 10 && nota >= 7:
    console.log("aprovado");
    break;
  case nota <= 6 && nota >= 4:
    console.log("recuperação");
    break;
  case nota <= 3:
    console.log("reprovado");
}
