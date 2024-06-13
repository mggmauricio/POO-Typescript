"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(code, description, quantity, price) {
        this._code = code;
        this._description = description;
        this.quantity = quantity;
        this.price = price;
    }
    get code() {
        return this._code;
    }
    get description() {
        return this._description;
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._price;
    }
    set code(code) {
        this._code = code;
    }
    set description(description) {
        this._description = description;
    }
    set quantity(quantity) {
        if (quantity < 0) {
            this._quantity = 0;
        }
        else {
            this._quantity = quantity;
        }
    }
    set price(price) {
        if (price < 0) {
            this._price = 0.0;
        }
        else {
            this._price = price;
        }
    }
    GetInvoiceAmount() {
        var total = this._quantity * this._price;
        return this.toString(total);
    }
    toString(total) {
        return `Codigo: ${this._code} - Descrição: ${this._description} - Quantiade: ${this._quantity} - Preço unitário: ${this._price} - Total: ${total}`;
    }
}
exports.Invoice = Invoice;
