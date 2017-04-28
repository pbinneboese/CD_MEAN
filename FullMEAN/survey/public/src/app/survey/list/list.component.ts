import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
// @Input() surveys: Array<Survey>;
  surveys: Array<Survey>;

  constructor(private _surveyComponent: SurveyComponent,
    private _surveyService: SurveyService) { }

  ngOnInit() {
    this.surveys = this._surveyComponent.surveys;
  }

  onSelectButton(survey: Survey) {
    this._surveyComponent.selectedSurvey = survey;
    this._surveyComponent.onSelectPoll();
  }

  onDeleteButton(survey: Survey) {
    this._surveyComponent.delete(survey);
  }

}
