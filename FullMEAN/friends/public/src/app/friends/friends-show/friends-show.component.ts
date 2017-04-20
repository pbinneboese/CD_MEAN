import { Component, OnInit, Input } from '@angular/core';
import { Friend } from './../friend';
import { FriendsService } from './../friends.service';

@Component({
  selector: 'app-friends-show',
  templateUrl: './friends-show.component.html',
  styleUrls: ['./friends-show.component.css']
})
export class FriendsShowComponent implements OnInit {
  @Input() friends: Friend[];

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

}
