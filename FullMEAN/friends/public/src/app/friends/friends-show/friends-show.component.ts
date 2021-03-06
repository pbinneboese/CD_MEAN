import { Component, OnInit, Input } from '@angular/core';
import { Friend } from './../friend';

@Component({
  selector: 'app-friends-show',
  templateUrl: './friends-show.component.html',
  styleUrls: ['./friends-show.component.css']
})
export class FriendsShowComponent implements OnInit {
  @Input() showFriend: Friend;

  constructor() { }

  ngOnInit() {
  }

}
