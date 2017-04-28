import { Component, OnInit, Input } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {
  @Input() showUser: User;

  constructor() { }

  ngOnInit() {
  }

}
