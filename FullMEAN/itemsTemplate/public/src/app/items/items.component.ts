import { Component, OnInit } from '@angular/core';
// import {Router, ActivatedRoute, Params} from '@angular/router';
import { ItemsService } from './items.service';
import { Item } from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(private _itemsService: ItemsService) { }

  showItem: Item;
  newItem: Item;
  editItem: Item;
  originalItem: Item;

  ngOnInit() {
    this.index();
  }

  // **** for non-HTTP operation ****
  // items: Array<Item> =
  // [
  //   {firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date(), email:"pbinneboese@mac.com", password:"password"},
  // 	{firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date()), email:"cbligh@mutiny.com", password:"password"},
  // 	{firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date(), email:"gwTheFirst@presidents.com", password:"password"}
  // ];

  // **** for non-HTTP operation ****
  // index(){ }
  //
  // show(item){ }
  //
  // create(item: Item){
  //   this.items.push(item);
  // }
  //
  // update(editItem: Item){
  //   console.log(editItem, originalItem);
  //   const i = this.items.indexOf(originalItem);
  //   this.items[i] = editItem;
  // }
  //
  // delete(item: Item){
  //   const i = this.items.indexOf(item);
  //   this.items.splice(i, 1);
  // }

  // **** for HTTP operation ****
  index(){   // get full items list
    this._itemsService.index()
    .then(data => {
      this.items = data;
      // hide the subcomponents
      this.showItem = null;
      this.newItem = null;
      this.editItem = null;
      this.originalItem = null;
    })
    .catch(err => console.log(err));
  }

  show(item: Item){
    console.log("showing item", item);
    this._itemsService.show(item)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  create(item: Item){
    console.log("creating item", item);
    this._itemsService.create(item)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  update(editItem: Item){
    console.log("updating item", this.originalItem, editItem);
    this._itemsService.update(this.originalItem, editItem)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  delete(item: Item){
    console.log("deleting item", item);
    this._itemsService.delete(item)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  // onAnEvent() {
  //   this.router.navigate(['otherRoute']);		// reroutes on a defined event
  // }
}
