import { CPF } from './CPF';
const prompt = require('prompt-sync')()

var cpf : string = prompt("Digite o número do cpf para verificar se o mesmo é válido: ");
const newCPF = new CPF(cpf);
const isValid = newCPF.verifyCPF();
if (isValid){
  console.log(`O CPF ${cpf} é válido`);
}
else{
  console.log("Esse cpf não é válido")
}