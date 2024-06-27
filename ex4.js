const prompt = require("prompt-sync")();
const direcao = prompt("qual direção você vai seguir? ");

if (direcao == "frente") {
  console.log("seguiremos em frente");
} else if (direcao == "esquerda") {
  console.log("virando o carro para a esquerda");
} else if (direcao == "direita") {
  console.log("virando o carro para a direita");
} else if (direcao == "tras") {
  console.log("dando ré com o carro");
}
