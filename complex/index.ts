import { Complex } from './Complex';
const prompt = require('prompt-sync')();

const complex1 = new Complex(1, 2);
console.log(complex1.toString());
const complex2 = new Complex(3);
console.log(complex2.toString());
complex1.Sum(complex2);
console.log(complex1.toString());
complex1.Subtraction(complex2);
console.log(complex1.toString());