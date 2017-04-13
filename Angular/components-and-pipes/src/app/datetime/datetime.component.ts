import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  thisDate: Date;

  constructor() { }

  ngOnInit() {
  this.thisDate = new Date(2017, 0, 7, 13, 15, 25);
  }

}
