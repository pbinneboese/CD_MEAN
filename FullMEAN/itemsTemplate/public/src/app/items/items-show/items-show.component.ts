import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../item';

@Component({
  selector: 'app-items-show',
  templateUrl: './items-show.component.html',
  styleUrls: ['./items-show.component.css']
})
export class ItemsShowComponent implements OnInit {
  @Input() showItem: Item;

  constructor() { }

  ngOnInit() {
  }

}
