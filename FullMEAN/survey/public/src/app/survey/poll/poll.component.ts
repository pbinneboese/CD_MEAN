import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
// @Input() surveys: Array<Survey>;
  survey: Survey;
  editSurvey: Survey;

  constructor(private _surveyComponent: SurveyComponent,
    private _surveyService: SurveyService) { }

  ngOnInit() {
    this.survey = this._surveyComponent.selectedSurvey; // local ptr to selectedSurvey
  }

  onVoteButton(selection: number) {
    this.editSurvey = new Survey("","");
    Object.assign(this.editSurvey, this.survey);
    switch(selection) {
      case 1: this.editSurvey.vote1++; break;
      case 2: this.editSurvey.vote2++; break;
      case 3: this.editSurvey.vote3++; break;
      case 4: this.editSurvey.vote4++; break;
      default:
    }
    this._surveyComponent.update(this.survey, this.editSurvey);
    this._surveyComponent.onSelectList(); // return to list view
  }

}
