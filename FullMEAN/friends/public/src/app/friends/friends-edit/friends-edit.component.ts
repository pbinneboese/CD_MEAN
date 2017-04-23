import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend';
// import { FriendsService } from './../friends.service';
// import { FriendsComponent } from './../friends.component';

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.css']
})
export class FriendsEditComponent implements OnInit {
  @Input() editFriend: Friend;
  @Input() originalFriend: Friend;
  @Output() editFriendEvent = new EventEmitter();

  constructor() { }
  // constructor(private _friendsService: FriendsService) { }
  // constructor(private _friendsComponent: FriendsComponent) { }

  ngOnInit() {
  }

  onUpdateMade() {
    // console.log(this.editFriend);
    this.editFriendEvent.emit(this.editFriend);
    // this._friendsComponent.update(this.editFriend);
  }

}
