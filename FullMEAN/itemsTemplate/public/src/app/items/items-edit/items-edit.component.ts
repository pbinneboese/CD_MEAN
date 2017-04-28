import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './../item';
// import { ItemsService } from './../items.service';
// import { ItemsComponent } from './../items.component';

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.css']
})
export class ItemsEditComponent implements OnInit {
  @Input() editItem: Item;
  @Input() originalItem: Item;
  @Output() editItemEvent = new EventEmitter();

  constructor() { }
  // constructor(private _itemsService: ItemsService) { }
  // constructor(private _itemsComponent: ItemsComponent) { }

  ngOnInit() {
  }

  onUpdateMade() {
    // console.log(this.editItem);
    this.editItemEvent.emit(this.editItem);
    // this._itemsComponent.update(this.editItem);
  }

}
