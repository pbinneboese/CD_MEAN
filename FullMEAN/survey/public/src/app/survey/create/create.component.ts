import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
// @Input() surveys: Array<Survey>;
  surveys: Array<Survey>;
  newSurvey: Survey;

  constructor(private _surveyComponent: SurveyComponent,
    private _surveyService: SurveyService) { }

  ngOnInit() {
    this.surveys = this._surveyComponent.surveys;
    this.newSurvey = new Survey("", "");
  }

  onCreateMade() {
    this.newSurvey.userName = this._surveyComponent.currentUserName;
    this._surveyComponent.create(this.newSurvey);
    this.newSurvey = new Survey("", "");
    this._surveyComponent.onSelectList(); // return to list view
  }

}
