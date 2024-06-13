export class Invoice {
  private _code: number;
  private _description: string;
  private _quantity!: number;
  private _price!: number;

  constructor(code: number, description: string, quantity: number, price: number) {
    this._code = code;
    this._description = description;
    this.quantity = quantity;
    this.price = price
  }

  get code(): number {
    return this._code;
  }
  get description(): string {
    return this._description;
  }
  get quantity(): number {
    return this._quantity;
  }
  get price(): number {
    return this._price;
  }

  set code(code: number) {
    this._code = code;
  }
  set description(description: string) {
    this._description = description;
  }
  set quantity(quantity: number) {
    if(quantity < 0){
      this._quantity = 0;
    }
    else{
      this._quantity = quantity;
    }
  }
  
  set price(price: number) {
    if(price < 0){
      this._price = 0.0;
    }
    else{
      this._price = price;
    }
  }

  GetInvoiceAmount() : string {
    var total : number = this._quantity * this._price;
    return this.toString(total);
  }
  toString(total : number) : string {
    return `Codigo: ${this._code} - Descrição: ${this._description} - Quantiade: ${this._quantity} - Preço unitário: ${this._price} - Total: ${total}`;
  }

}