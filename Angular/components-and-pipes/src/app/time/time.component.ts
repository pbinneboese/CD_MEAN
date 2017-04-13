import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  thisDate: Date;

  constructor() { }

  ngOnInit() {
  this.thisDate = new Date(2017, 0, 7, 13, 15, 25);
  }

}
