import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../survey';
import { SurveyService } from './../survey.service';
import { SurveyComponent } from './../survey.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loggedIn: boolean;
  @Input() loggedOut: boolean;
  @Input() currentUserName: string;
  account: Account = new Account("");

  constructor(private _surveyComponent: SurveyComponent) { }

  ngOnInit() {
  }

  onLogin() {
    this._surveyComponent.login(this.account);
  }
  // onRegister() {
  //   this._surveyComponent.register(this.account);
  // }
  onLogout() {
    this._surveyComponent.logout();
    this.account.userName = "";
  }

}
