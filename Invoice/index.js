"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./Invoice");
const prompt = require('prompt-sync')();
const invoice1 = new Invoice_1.Invoice(1, "Caneta", 10, 10);
console.log(invoice1.GetInvoiceAmount());
const invoice2 = new Invoice_1.Invoice(2, "Lápis", -5, -300);
console.log(invoice2.GetInvoiceAmount());
