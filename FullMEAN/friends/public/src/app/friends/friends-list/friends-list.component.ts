import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend';
// import { FriendsService } from './../friends.service';
import { FriendsComponent } from './../friends.component';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  @Input() friends: Friend[];
  // @Output() updateFriends = new EventEmitter();

  constructor(private _friendsComponent: FriendsComponent) { }
  // constructor(private _friendsService: FriendsService) { }

  onNewButton() {
    this._friendsComponent.newFriend = new Friend();
    // only for non-DB operation - otherwise use DB _id
    // this._friendsComponent.newFriend._id = this.friends.length + 1;
    this._friendsComponent.newFriend.createdAt = new Date();
    // blank out the others
    this._friendsComponent.showFriend = null;
    this._friendsComponent.editFriend = null;
  }
  onShowButton(friend: Friend) {
    this._friendsComponent.showFriend = friend;
    // this._friendsComponent.show(friend);
    // blank out the others
    this._friendsComponent.newFriend = null;
    this._friendsComponent.editFriend = null;
  }
  onUpdateButton(friend: Friend) {
    this._friendsComponent.originalFriend = friend;
    this._friendsComponent.editFriend = new Friend();
    Object.assign(this._friendsComponent.editFriend, friend);
    // blank out the others
    this._friendsComponent.showFriend = null;
    this._friendsComponent.newFriend = null;
    // friend.editable = !friend.editable;
    // this._friendsComponent.update(editFriend);
  }
  onDeleteButton(friend: Friend) {
    this._friendsComponent.delete(friend);
    // blank out the others
    this._friendsComponent.showFriend = null;
    this._friendsComponent.newFriend = null;
    this._friendsComponent.editFriend = null;
  }

  // onFriendUpdate() {    // friend update event
  //   this.updateFriends.emit();
  // }

  ngOnInit() {
  }

}
