export class Complex {
  private _real: number;
  private _imaginary: number;

  constructor(real: number, imaginary?: number){
      this._real = real;
      this._imaginary = imaginary ?? 0;
  }


  get real(): number {
      return this._real;
  }
  get imaginary(): number {
      return this._imaginary;
  }
  set real(real: number) {
      this._real = real;
  }
  set imaginary(imaginary: number) {
      this._imaginary = imaginary;
  }

  Sum(obj: Complex) {
    this._real += obj._real;
    this._imaginary += obj._imaginary;
  }

  Subtraction(obj: Complex) {
    this._real -= obj._real;
    this._imaginary -= obj._imaginary;
  }


  Equals(obj: Complex) {
    return this._real == obj._real && this._imaginary == obj._imaginary;
  }

  toString(){
    return `(${this._real}, ${this._imaginary}i)`;
  }
}

    