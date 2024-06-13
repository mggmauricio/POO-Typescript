"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = void 0;
class Complex {
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary !== null && imaginary !== void 0 ? imaginary : 0;
    }
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }
    set real(real) {
        this._real = real;
    }
    set imaginary(imaginary) {
        this._imaginary = imaginary;
    }
    Sum(obj) {
        this._real += obj._real;
        this._imaginary += obj._imaginary;
    }
    Subtraction(obj) {
        this._real -= obj._real;
        this._imaginary -= obj._imaginary;
    }
    Equals(obj) {
        return this._real == obj._real && this._imaginary == obj._imaginary;
    }
    toString() {
        return `(${this._real}, ${this._imaginary}i)`;
    }
}
exports.Complex = Complex;
