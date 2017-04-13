import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private _productService:ProductService) {
    this.products = this._productService.index();
  }

  onClick(product:Product) {
    console.log("Deleting", product.id);
    this._productService.destroy(product);
  }

  ngOnInit() {
    this.products = this._productService.products;
  }

}
