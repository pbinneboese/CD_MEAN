import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  products: Array<Product> = [
    new Product(1, "Keyboard", "Corsair", 129.99, 500, Date(), Date()),
    new Product(2, "Mouse", "Corsair", 59.99, 500, Date(), Date()),
    new Product(3, "Keyboard", "Das", 169.99, 500, Date(), Date()),
    new Product(4, "Mouse", "Das", 89.99, 500, Date(), Date()),
  ]
  constructor() { }

  index(){
    return this.products;
  }
  create(product:Product){
    this.products.push(product);
  }
  destroy(product:Product){
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
  }
  update(){

  }

}
