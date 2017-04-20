import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Observer} from "rxjs/Observer";
import "rxjs";
import { Friend } from './friend';

@Injectable()
export class FriendsService {
  @Input() friends: Friend[];
  @Input() ShowFriend: boolean;
  @Input() NewFriend: boolean;
  @Input() EditFriend: boolean;

  constructor(private _http: Http){ this.index() }

  index(){
    return this._http.get('/friends')
    .map((response: Response) => response.json());
    // this._http.get('/friends')
    // .map((response)=> response.json())
    // .subscribe((data) => this.friends = data);
  }

  show(friend: Friend){
    this.ShowFriend = true;
  }

  create(friend: Friend){
    this.NewFriend = true;
    this._http.post('/friends', friend)
    .subscribe((response)=> this.index());
  }

  destroy(friend: Friend){ }

  update(friend: Friend, editedFriend:Friend, done){
    this.EditFriend = true;
  }
}
