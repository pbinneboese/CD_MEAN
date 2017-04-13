import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  products: Array<Product>;
  newProduct: Product = new Product;

  constructor(private _productService:ProductService) { }

  onSubmit(formData: NgForm) {
    console.log(formData.value);
    this.newProduct.id = this.products.length;
    this.newProduct.name = formData.value.name;
    this.newProduct.description = formData.value.description;
    this.newProduct.price = formData.value.price;
    this.newProduct.quantity = formData.value.quantity;
    this.newProduct.created_at = Date();
    this.newProduct.updated_at = Date();
    this._productService.create(this.newProduct);
    this.newProduct = new Product;
  }

  ngOnInit() {
    this.products = this._productService.products;
  }

}
