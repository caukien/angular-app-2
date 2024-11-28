export class Product {
  constructor(
    public id: number,
    public productName: string,
    public sold: number,
    public stock: number,
    public exp: Date,
    public cateId: number
  ) {}
}
