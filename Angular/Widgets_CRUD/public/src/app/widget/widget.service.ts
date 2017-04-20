import { Widget } from './widget';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import {Observer} from "rxjs/Observer";
import "rxjs";

@Injectable()
export class WidgetService {

  constructor(private _http: Http){ }

  getWidgets(){
    return this._http.get('/widgets')
    .map((response)=> response.json())
   }

   create(widget: Widget){
     return this._http.post('/widgets', widget)
     .map((response)=> response.json())
   }

  destroy(widget: Widget){
    return this._http.delete('/widgets', widget)
    .map((response)=> response.json())
  }

  update(updatedWidget:Widget){
    return this._http.put('/widgets/'+updatedWidget.id, updatedWidget)
    .map((response)=> response.json())
  }
  
  show(widget: Widget){ }
}