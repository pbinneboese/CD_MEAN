import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend';
import { FriendsService } from './../friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  @Input() friends: Friend[];
  @Output() updateFriends = new EventEmitter();
  constructor(private _friendsService: FriendsService) { }

  onShow(friend: Friend) {
    this._friendsService.show(friend);
  }
  onUpdate(friend: Friend) {
    // this._friendsService.update(friend);
  }
  onDelete(friend: Friend) {
    this._friendsService.destroy(friend);
  }

  onFriendUpdate() {    // friend update event
    this.updateFriends.emit();
  }

  ngOnInit() {
  }

}
