import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';
// import { UsersService } from './../users.service';
// import { UsersComponent } from './../users.component';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
  @Input() newUser: User;
  @Output() createNewUserEvent = new EventEmitter();

  constructor() { }
  // constructor(private _usersService: UsersService) { }
  // constructor(private _usersComponent: UsersComponent) { }

  ngOnInit() {
  }

  onCreateMade() {
    // console.log(this.newUser);
    this.createNewUserEvent.emit(this.newUser);
    // this._usersComponent.create(this.newUser);
  }

}
