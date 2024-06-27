const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Nota de história: "));
const nota2 = Number(prompt("Nota de geografia: "));
const nota3 = Number(prompt("Nota de física: "));
const media = Number((nota1 + nota2 + nota3) / 3);

if (media <= 4) {
  console.log("REPROVADO");
} else if (media >= 4 && media < 7) {
  console.log("RECUPERACAO");
} else {
  console.log("APROVADO");
}
