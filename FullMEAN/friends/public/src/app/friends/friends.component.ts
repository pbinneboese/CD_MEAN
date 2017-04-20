import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FriendsService } from './friends.service';
import { Friend } from './friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Array<Friend> = [];
  // [
  //   {firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date()},
  // 	{firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date()},
  // 	{firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date()}
  // ];
  ShowFriend: boolean = false;
  NewFriend: boolean = false;
  EditFriend: boolean = false;

  constructor(private _friendsService: FriendsService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getFriends();
    this.route.params.subscribe((param) => {	// subscribe to friend ID in path
    console.log("subscription", param.id);
    });
  }
  getFriends(){   // get full friends list
    this._friendsService.index()
    .toPromise()
    .then(data => { // got it
      console.log("server friends", data);
      this.friends = data;
    })
    .catch( err => {
      console.log("server error", err);
    })
  }
  updateFriendsParent(){  // re-fetch full friends list upon update
  	this.getFriends();
  }
  // onAnEvent() {
  //   this.router.navigate(['otherRoute']);		// reroutes on a defined event
  // }
}
