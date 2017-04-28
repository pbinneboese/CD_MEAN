import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './../item';
// import { ItemsService } from './../items.service';
// import { ItemsComponent } from './../items.component';

@Component({
  selector: 'app-items-new',
  templateUrl: './items-new.component.html',
  styleUrls: ['./items-new.component.css']
})
export class ItemsNewComponent implements OnInit {
  @Input() newItem: Item;
  @Output() createNewItemEvent = new EventEmitter();

  constructor() { }
  // constructor(private _itemsService: ItemsService) { }
  // constructor(private _itemsComponent: ItemsComponent) { }

  ngOnInit() {
  }

  onCreateMade() {
    // console.log(this.newItem);
    this.createNewItemEvent.emit(this.newItem);
    // this._itemsComponent.create(this.newItem);
  }

}
