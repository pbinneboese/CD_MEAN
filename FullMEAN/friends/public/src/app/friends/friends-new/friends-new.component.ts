import { Component, OnInit, Input } from '@angular/core';
import { Friend } from './../friend';
import { FriendsService } from './../friends.service';

@Component({
  selector: 'app-friends-new',
  templateUrl: './friends-new.component.html',
  styleUrls: ['./friends-new.component.css']
})
export class FriendsNewComponent implements OnInit {
  @Input() friends: Friend[];
  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

}
