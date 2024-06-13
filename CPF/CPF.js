"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPF = void 0;
class CPF {
    constructor(cpf) {
        this._cpf = cpf;
    }
    getCPF() {
        return this._cpf;
    }
    verifyFirstDigit() {
        var sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(this._cpf.charAt(i)) * (10 - i);
        }
        var remainder = sum % 11;
        var first_digit = remainder < 2 ? 0 : 11 - remainder;
        return first_digit == parseInt(this._cpf.charAt(9));
    }
    verifySecondDigit() {
        var sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(this._cpf.charAt(i)) * (11 - i);
        }
        var remainder = sum % 11;
        var second_digit = remainder < 2 ? 0 : 11 - remainder;
        return second_digit == parseInt(this._cpf.charAt(10));
    }
    verifyCPF() {
        return this.verifyFirstDigit() && this.verifySecondDigit();
    }
}
exports.CPF = CPF;
