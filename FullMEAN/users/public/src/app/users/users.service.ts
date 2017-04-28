import { Injectable, Input } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs";
import { User } from './user';

@Injectable()
export class UsersService {

  constructor(private _http: Http){ }

  index(){
    return this._http.get('/users')
    .map(data => data.json()).toPromise()
  }

  show(user: User){
    return this._http.get("/users/"+user._id)
    .map(data => data.json()).toPromise()
  }

  create(user: User){
    return this._http.post("/users", user)
    .map(data => data.json()).toPromise()
  }

  update(user: User, editUser: User){
    return this._http.put("/users/"+user._id, editUser)
    .map(data => data.json()).toPromise()
  }

  delete(user: User){
    return this._http.delete("/users/"+user._id)
    .map(data => data.json()).toPromise()
  }

}
