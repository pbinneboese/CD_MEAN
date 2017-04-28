import { Injectable, Input } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs";
import { Item } from './item';

@Injectable()
export class ItemsService {

  constructor(private _http: Http){ }

  index(){
    return this._http.get('/items')
    .map(data => data.json()).toPromise()
  }

  show(item: Item){
    return this._http.get("/items/"+item._id)
    .map(data => data.json()).toPromise()
  }

  create(item: Item){
    return this._http.post("/items", item)
    .map(data => data.json()).toPromise()
  }

  update(item: Item, editItem: Item){
    return this._http.put("/items/"+item._id, editItem)
    .map(data => data.json()).toPromise()
  }

  delete(item: Item){
    return this._http.delete("/items/"+item._id)
    .map(data => data.json()).toPromise()
  }
}
