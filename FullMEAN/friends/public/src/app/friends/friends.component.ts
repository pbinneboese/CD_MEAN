import { Component, OnInit } from '@angular/core';
// import {Router, ActivatedRoute, Params} from '@angular/router';
import { FriendsService } from './friends.service';
import { Friend } from './friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Array<Friend>;

  constructor(private _friendsService: FriendsService) { }

  showFriend: Friend;
  newFriend: Friend;
  editFriend: Friend;
  originalFriend: Friend;

  ngOnInit() {
    this.index();
  }

  // **** for non-HTTP operation ****
  // friends: Array<Friend> =
  // [
  //   {firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date()},
  // 	{firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date())},
  // 	{firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date()}
  //   // new Friend(firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date()),
  // 	// new Friend(firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date()),
  // 	// new Friend(firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date())
  // ];

  // **** for non-HTTP operation ****
  // index(){ }
  //
  // show(friend){ }
  //
  // create(friend: Friend){
  //   this.friends.push(friend);
  // }
  //
  // update(editFriend: Friend){
  //   console.log(editFriend, originalFriend);
  //   const i = this.friends.indexOf(originalFriend);
  //   this.friends[i] = editFriend;
  // }
  //
  // delete(friend: Friend){
  //   const i = this.friends.indexOf(friend);
  //   this.friends.splice(i, 1);
  // }

  // **** for HTTP operation ****
  index(){   // get full friends list
    this._friendsService.index()
    .then(data => {
      this.friends = data;
      // hide the subcomponents
      this.showFriend = null;
      this.newFriend = null;
      this.editFriend = null;
      this.originalFriend = null;
    })
    .catch(err => console.log(err));
  }

  show(friend: Friend){
    console.log("showing friend", friend);
    this._friendsService.show(friend)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  create(friend: Friend){
    console.log("creating friend", friend);
    this._friendsService.create(friend)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  update(editFriend: Friend){
    console.log("updating friend", this.originalFriend, editFriend);
    this._friendsService.update(this.originalFriend, editFriend)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  delete(friend: Friend){
    console.log("deleting friend", friend);
    this._friendsService.delete(friend)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  // onAnEvent() {
  //   this.router.navigate(['otherRoute']);		// reroutes on a defined event
  // }
}
