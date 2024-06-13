"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
class Triangle {
    constructor(side) {
        if (side !== undefined) {
            this.setSide(side);
        }
        else {
            this._side = 1.0;
        }
    }
    getSide() {
        return this._side;
    }
    setSide(side) {
        if (side >= 0 && side <= 20) {
            this._side = side;
        }
        else {
            throw new Error("O lado tem que ser menor que 20 e maior que 0");
        }
    }
    area() {
        return (Math.sqrt(3) / 4) * Math.pow(this._side, 2);
    }
    perimeter() {
        return 3 * this._side;
    }
    toString() {
        return `Triangulo com lado ${this._side}`;
    }
}
exports.Triangle = Triangle;
