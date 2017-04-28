import { Injectable, Input } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs";
import { Survey } from './survey';

@Injectable()
export class SurveyService {

  constructor(private _http: Http){ }

  index(){
    return this._http.get('/surveys')
    .map(data => data.json()).toPromise()
  }

  show(survey: Survey){
    return this._http.get("/surveys/"+survey._id)
    .map(data => data.json()).toPromise()
  }

  create(survey: Survey){
    return this._http.post("/surveys", survey)
    .map(data => data.json()).toPromise()
  }

  update(survey: Survey, editSurvey: Survey){
    return this._http.put("/surveys/"+survey._id, editSurvey)
    .map(data => data.json()).toPromise()
  }

  delete(survey: Survey){
    return this._http.delete("/surveys/"+survey._id)
    .map(data => data.json()).toPromise()
  }

}
