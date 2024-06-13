export class Triangle {
  private _side!: number; // Usando definite assignment assertion

  constructor();
  constructor(side: number);
  constructor(side?: number) {
      if (side !== undefined) {
          this.setSide(side);
      } else {
          this._side = 1.0;
      }
  }

  getSide(): number {
      return this._side;
  }

  setSide(side: number): void {
      if (side >= 0 && side <= 20) {
          this._side = side;
      } else {
          throw new Error("O lado tem que ser menor que 20 e maior que 0");
      }
  }

  area(): number {
      return (Math.sqrt(3) / 4) * Math.pow(this._side, 2);
  }

  perimeter(): number {
      return 3 * this._side;
  }

  toString(): string {
      return `Triangulo com lado ${this._side}`;
  }
}
