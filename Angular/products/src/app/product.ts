export class Product {
  constructor(
    public id: number = 0,
    public name: string = "",
    public description: string = "",
    public price: number = 0,
    public quantity: number = 0,
    public created_at: string = "",
    public updated_at: string = ""
  ) {}
}
