import { Component, OnInit } from '@angular/core';
// import {Router, ActivatedRoute, Params} from '@angular/router';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(private _usersService: UsersService) { }

  showUser: User;
  newUser: User;
  editUser: User;
  originalUser: User;

  ngOnInit() {
    this.index();
  }

  // **** for non-HTTP operation ****
  // users: Array<User> =
  // [
  //   {firstName:"Paul", lastName:"Binneboese", birthday:new Date(), createdAt:new Date()},
  // 	{firstName:"Captain", lastName:"Bligh", birthday:new Date(), createdAt:new Date()},
  // 	{firstName:"George", lastName:"Washington", birthday:new Date(), createdAt:new Date()}
  // ];
  //
  // // **** for non-HTTP operation ****
  // index(){ }
  //
  // show(user){ }
  //
  // create(user: User){
  //   this.users.push(user);
  // }
  //
  // update(editUser: User){
  //   // console.log(editUser, originalUser);
  //   const i = this.users.indexOf(this.originalUser);
  //   this.users[i] = editUser;
  // }
  //
  // delete(user: User){
  //   const i = this.users.indexOf(user);
  //   this.users.splice(i, 1);
  // }

  // **** for HTTP operation ****
  index(){   // get full users list
    this._usersService.index()
    .then(data => {
      this.users = data;
      // hide the subcomponents
      this.showUser = null;
      this.newUser = null;
      this.editUser = null;
      this.originalUser = null;
    })
    .catch(err => console.log(err));
  }

  show(user: User){
    console.log("showing user", user);
    this._usersService.show(user)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  create(user: User){
    console.log("creating user", user);
    this._usersService.create(user)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  update(editUser: User){
    console.log("updating user", this.originalUser, editUser);
    this._usersService.update(this.originalUser, editUser)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  delete(user: User){
    console.log("deleting user", user);
    this._usersService.delete(user)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  // onAnEvent() {
  //   this.router.navigate(['otherRoute']);		// reroutes on a defined event
  // }
}
