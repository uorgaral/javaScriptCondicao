const prompt = require("prompt-sync")();
const nomeFixo = "lara";
const senhaFixa = Number("1234");
let userNome = prompt("Digite seu nome: ");
let userSenha = Number(prompt("Digite sua senha: "));

console.log(userNome);
console.log(userSenha);

if (userNome != nomeFixo) {
  console.log("usuário incorreto");
} else {
  if (userSenha == senhaFixa) {
    console.log("acesso liberado");
  } else {
    console.log("acesso negado");
  }
}
