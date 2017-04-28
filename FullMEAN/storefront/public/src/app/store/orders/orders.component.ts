import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../order';
import { Customer } from '../customer';
import { Product } from '../product';
// import { OrdersService } from './orders.service';
import { StoreService } from './../store.service';
import { StoreComponent } from './../store.component';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  // @Input() orders: Array<Order>;
  orders: Array<Order>;       // local ptr to Store [orders]
  products: Array<Product>;   // local ptr to Store [products]
  customers: Array<Customer>; // local ptr to Store [customers]
  newOrder: Order;
  showOrder: Order;
  editOrder: Order;
  originalOrder: Order;
  // newCustomer: Customer = new Customer("","");
  // newProduct: Product = new Product("","",0);
  // custName: string;
  // prodName: string;

  constructor(private _storeComponent: StoreComponent,
    private _storeService: StoreService) { }

  ngOnInit() {
    this.orders = this._storeComponent.orders;
    this.products = this._storeComponent.products;
    this.customers = this._storeComponent.customers;
    this.newOrder = new Order("", 0);
  }

  onCreateMade(form: NgForm) {
    console.log("FORM", form.value);
    console.log("CP", this.newOrder);
    // this.newOrder._product = this.newProduct;
    // this.newOrder._customer = this.newCustomer;
    // console.log("Creating New Order", this.newOrder);
    // this._storeComponent.createOrder(this.newOrder);
    // this.newOrder = new Order("", 0);
  }

}
