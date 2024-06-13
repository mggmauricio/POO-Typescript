export class CPF{
  private _cpf!: string; // Usando definite assignment assertion
  constructor(cpf: string) {
      this._cpf = cpf;
  }
  getCPF(): string {
      return this._cpf;
  }
  verifyFirstDigit() : boolean {
    var sum : number = 0;
    for(let i = 0; i < 9; i++){
      sum += parseInt(this._cpf.charAt(i)) * (10 - i);     
    }
    var remainder : number = sum % 11;
    var first_digit : number = remainder < 2 ? 0 : 11 - remainder;
    return first_digit == parseInt(this._cpf.charAt(9));
  }


  verifySecondDigit() : boolean {
    var sum : number = 0;
    for(let i = 0; i < 10; i++){
      sum += parseInt(this._cpf.charAt(i)) * (11 - i);     
    }
    var remainder : number = sum % 11;
    var second_digit : number = remainder < 2? 0 : 11 - remainder;
    return second_digit == parseInt(this._cpf.charAt(10));
  
  }

  verifyCPF() : boolean {
    return this.verifyFirstDigit() && this.verifySecondDigit();
  }
}