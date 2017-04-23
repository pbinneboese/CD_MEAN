import { Injectable, Input } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs";
import { Friend } from './friend';

@Injectable()
export class FriendsService {

  constructor(private _http: Http){ }

  index(){
    return this._http.get('/friends')
    .map(data => data.json()).toPromise()
  }

  show(friend: Friend){
    return this._http.get("/friends/"+friend._id)
    .map(data => data.json()).toPromise()
  }

  create(friend: Friend){
    return this._http.post("/friends", friend)
    .map(data => data.json()).toPromise()
  }

  update(friend: Friend, editFriend: Friend){
    return this._http.put("/friends/"+friend._id, editFriend)
    .map(data => data.json()).toPromise()
  }

  delete(friend: Friend){
    return this._http.delete("/friends/"+friend._id)
    .map(data => data.json()).toPromise()
  }
}
