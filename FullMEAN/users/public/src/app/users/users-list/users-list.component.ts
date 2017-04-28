import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';
// import { UsersService } from './../users.service';
import { UsersComponent } from './../users.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  // @Output() updateUsers = new EventEmitter();

  constructor(private _usersComponent: UsersComponent) { }
  // constructor(private _usersService: UsersService) { }

  onNewButton() {
    this._usersComponent.newUser = new User();
    // only for non-DB operation - otherwise use DB _id
    // this._usersComponent.newUser._id = this.users.length + 1;
    this._usersComponent.newUser.createdAt = new Date();
    // blank out the others
    this._usersComponent.showUser = null;
    this._usersComponent.editUser = null;
  }
  onShowButton(user: User) {
    this._usersComponent.showUser = user;
    // this._usersComponent.show(user);
    // blank out the others
    this._usersComponent.newUser = null;
    this._usersComponent.editUser = null;
  }
  onUpdateButton(user: User) {
    this._usersComponent.originalUser = user;
    this._usersComponent.editUser = new User();
    Object.assign(this._usersComponent.editUser, user);
    // blank out the others
    this._usersComponent.showUser = null;
    this._usersComponent.newUser = null;
    // user.editable = !user.editable;
    // this._usersComponent.update(editUser);
  }
  onDeleteButton(user: User) {
    this._usersComponent.delete(user);
    // blank out the others
    this._usersComponent.showUser = null;
    this._usersComponent.newUser = null;
    this._usersComponent.editUser = null;
  }

  // onUserUpdate() {    // user update event
  //   this.updateUsers.emit();
  // }

  ngOnInit() {
  }

}
