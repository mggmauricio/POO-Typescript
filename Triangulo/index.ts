import { Triangle } from './Triangle';
const prompt = require('prompt-sync')()


const defaultTriangle = new Triangle();
console.log(defaultTriangle.toString()); 
console.log(`Area: ${defaultTriangle.area()}`); 
console.log(`Perimetro: ${defaultTriangle.perimeter()}`); 
const side = parseInt(prompt("Digite o lado do triangulo:"))
defaultTriangle.setSide(side);
console.log(defaultTriangle.toString()); 
console.log(`Area: ${defaultTriangle.area()}`); 
console.log(`Perimetro: ${defaultTriangle.perimeter()}`); 
const myTriangle = new Triangle(5);
console.log(myTriangle.toString()); 
console.log(`Area: ${myTriangle.area()}`); 
console.log(`Perimetro: ${myTriangle.perimeter()}`); 


