import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend';
// import { FriendsService } from './../friends.service';
// import { FriendsComponent } from './../friends.component';

@Component({
  selector: 'app-friends-new',
  templateUrl: './friends-new.component.html',
  styleUrls: ['./friends-new.component.css']
})
export class FriendsNewComponent implements OnInit {
  @Input() newFriend: Friend;
  @Output() createNewFriendEvent = new EventEmitter();

  constructor() { }
  // constructor(private _friendsService: FriendsService) { }
  // constructor(private _friendsComponent: FriendsComponent) { }

  ngOnInit() {
  }

  onCreateMade() {
    // console.log(this.newFriend);
    this.createNewFriendEvent.emit(this.newFriend);
    // this._friendsComponent.create(this.newFriend);
  }

}
