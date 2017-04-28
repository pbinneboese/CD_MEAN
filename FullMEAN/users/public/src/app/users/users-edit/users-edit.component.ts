import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';
// import { UsersService } from './../users.service';
// import { UsersComponent } from './../users.component';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  @Input() editUser: User;
  @Input() originalUser: User;
  @Output() editUserEvent = new EventEmitter();

  constructor() { }
  // constructor(private _usersService: UsersService) { }
  // constructor(private _usersComponent: UsersComponent) { }

  ngOnInit() {
  }

  onUpdateMade() {
    // console.log(this.editUser);
    this.editUserEvent.emit(this.editUser);
    // this._usersComponent.update(this.editUser);
  }

}
