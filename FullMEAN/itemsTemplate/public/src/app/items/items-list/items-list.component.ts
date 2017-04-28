import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './../item';
// import { ItemsService } from './../items.service';
import { ItemsComponent } from './../items.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() items: Item[];
  // @Output() updateItems = new EventEmitter();

  constructor(private _itemsComponent: ItemsComponent) { }
  // constructor(private _itemsService: ItemsService) { }

  onNewButton() {
    this._itemsComponent.newItem = new Item();
    // only for non-DB operation - otherwise use DB _id
    // this._itemsComponent.newItem._id = this.items.length + 1;
    this._itemsComponent.newItem.createdAt = new Date();
    // blank out the others
    this._itemsComponent.showItem = null;
    this._itemsComponent.editItem = null;
  }
  onShowButton(item: Item) {
    this._itemsComponent.showItem = item;
    // this._itemsComponent.show(item);
    // blank out the others
    this._itemsComponent.newItem = null;
    this._itemsComponent.editItem = null;
  }
  onUpdateButton(item: Item) {
    this._itemsComponent.originalItem = item;
    this._itemsComponent.editItem = new Item();
    Object.assign(this._itemsComponent.editItem, item);
    // blank out the others
    this._itemsComponent.showItem = null;
    this._itemsComponent.newItem = null;
    // item.editable = !item.editable;
    // this._itemsComponent.update(editItem);
  }
  onDeleteButton(item: Item) {
    this._itemsComponent.delete(item);
    // blank out the others
    this._itemsComponent.showItem = null;
    this._itemsComponent.newItem = null;
    this._itemsComponent.editItem = null;
  }

  // onItemUpdate() {    // item update event
  //   this.updateItems.emit();
  // }

  ngOnInit() {
  }

}
