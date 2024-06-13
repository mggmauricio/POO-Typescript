import { Invoice } from './Invoice'
const prompt = require('prompt-sync')()

const invoice1 = new Invoice(1, "Caneta", 10, 10);
console.log(invoice1.GetInvoiceAmount());
const invoice2 = new Invoice(2, "Lápis", -5, -300);
console.log(invoice2.GetInvoiceAmount());