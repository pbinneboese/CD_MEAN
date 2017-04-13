import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  thisDate: Date;

  constructor() { }

  ngOnInit() {
  this.thisDate = new Date(2017, 0, 7);
  }

}
