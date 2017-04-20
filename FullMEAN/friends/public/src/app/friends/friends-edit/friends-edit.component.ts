import { Component, OnInit, Input } from '@angular/core';
import { Friend } from './../friend';
import { FriendsService } from './../friends.service';

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.css']
})
export class FriendsEditComponent implements OnInit {
  @Input() friends: Friend[];

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

}
