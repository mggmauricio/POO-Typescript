import { Triangle } from './Triangle';

const defaultTriangle = new Triangle();
console.log(defaultTriangle.toString()); 
console.log(`Area: ${defaultTriangle.area()}`); 
console.log(`Perimetro: ${defaultTriangle.perimeter()}`); 

const myTriangle = new Triangle(5);
console.log(myTriangle.toString()); 
console.log(`Area: ${myTriangle.area()}`); 
console.log(`Perimetro: ${myTriangle.perimeter()}`); 


