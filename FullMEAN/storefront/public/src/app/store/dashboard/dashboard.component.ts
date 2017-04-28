import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
import { Customer } from '../customer';
import { Product } from '../product';
import { StoreService } from './../store.service';
import { StoreComponent } from './../store.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @Input() orders: Array<Order>;
  // @Input() customers: Array<Customer>;
  // @Input() products: Array<Product>;
  ordersNew: Array<Order>;
  customersNew: Array<Customer>;
  productsNew: Array<Product>;

  constructor(private _storeComponent: StoreComponent) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this.ordersNew = this._storeComponent.orders;
    this.customersNew = this._storeComponent.customers;
    this.productsNew = this._storeComponent.products;
  }

}
