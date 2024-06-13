"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CPF_1 = require("./CPF");
const prompt = require('prompt-sync')();
var cpf = prompt("Digite o número do cpf para verificar se o mesmo é válido: ");
const newCPF = new CPF_1.CPF(cpf);
const isValid = newCPF.verifyCPF();
if (isValid) {
    console.log(`O CPF ${cpf} é válido`);
}
else {
    console.log("Esse cpf não é válido");
}
