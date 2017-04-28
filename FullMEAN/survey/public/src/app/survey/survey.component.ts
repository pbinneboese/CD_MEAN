import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs";
import { SurveyService } from './survey.service';
import { Survey } from './survey';
import { Account } from './survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveys: Array<Survey> = [];
  accounts: Array<Account> = [];
  selectedSurvey: Survey;

  currentUserName: string;
  loggedIn = false;
  loggedOut = true;
  errorMessage = "";

  // **** for non-DB operation ****
  // surveys: Array<Survey> =
  // [
  //   new Survey("Paul Binneboese", "What is your favorite color?"),
  //   new Survey("Captain Bligh", "Who can conquer Moby Dick?"),
  //   new Survey("George Washington", "Who cannot tell a lie?"),
  // ];
  // accounts: Array<Account> =
  // [
  //   new Account("Paul Binneboese"),
  //   new Account("Captain Bligh"),
  //   new Account("George Washington"),
  // ];

  constructor(private _surveyService: SurveyService,
    private _http: Http) { }

  selectedView: string = "Login";

  ngOnInit() {
    this.checkLogin();
    this.onSelectLogin(); // show dashboard at beginning
    this.getAccounts(); // fetch all accounts
    this.index(); // fetch all surveys
  }

  // **** View Selector ****
    onSelectList() {
      console.log("List View");
      this.selectedView = "List";
    }
    onSelectCreate() {
      console.log("Create View");
      this.selectedView = "Create";
    }
    onSelectPoll() {
      console.log("Poll View");
      this.selectedView = "Poll";
    }
    onSelectLogin() {
      console.log("Login View");
      this.selectedView = "Login";
    }

  // **** for non-HTTP operation ****
  // index(){ }
  //
  // show(survey){ }
  //
  // create(survey: Survey){
  //   survey._id = "A" + this.surveys.length;
  //   survey.createdAt = new Date();
  //   this.surveys.push(survey);
  // }
  //
  // update(originalSurvey: Survey, editSurvey: Survey){
  //   // console.log(editSurvey, originalSurvey);
  //   const i = this.surveys.indexOf(originalSurvey);
  //   this.surveys[i] = editSurvey;
  //   console.log(this.surveys[i]);
  // }
  //
  // delete(survey: Survey){
  //   const i = this.surveys.indexOf(survey);
  //   this.surveys.splice(i, 1);
  // }

  // **** for HTTP operation ****
  index(){   // get full surveys list
    this._surveyService.index()
    .then(data => {
      this.surveys = data;
    })
    .catch(err => console.log(err));
  }

  show(survey: Survey){
    console.log("showing survey", survey.question);
    this._surveyService.show(survey)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  create(survey: Survey){
    console.log("creating survey", survey.question);
    this._surveyService.create(survey)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  update(originalSurvey: Survey, editSurvey: Survey){
    console.log("updating survey", originalSurvey.question);
    this._surveyService.update(originalSurvey, editSurvey)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  delete(survey: Survey){
    console.log("deleting survey", survey.question);
    this._surveyService.delete(survey)
    .then(response => this.index())
    .catch(err => console.log(err));
  }

  // register(account: Account){
  //   console.log("register account", account);
  //   this._http.post("/login", account)
  //   .map(data => data.json()).toPromise()
  //   .then(response => {
  //     if (response) {
  //       this.loggedIn = true;
  //       this.loggedOut = false;
  //       this.currentUserName = response;
  //     }
  //     else {
  //       this.errorMessage = "registration failed, try again";
  //     }
  //     this.loggedIn = true;
  //     this.loggedOut = false;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     this.errorMessage = "registration failed, try again";
  //    })
  // }

  login(account: Account){
    console.log("login account", account.userName);
    this._http.post("/login", account)
    .map(data => data.json()).toPromise()
    .then(response => {
      if (response) {
        this.loggedIn = true;
        this.loggedOut = false;
        this.currentUserName = account.userName;
        this.errorMessage = "";
      }
      else {
        this.errorMessage = "login failed, try again";
      }
    })
    .catch(err => {
      console.log(err);
      this.errorMessage = "login failed, try again";
    })
    this.getAccounts(); // update list after new logins/registrations
  }

  logout(){
    console.log("logout account");
    this._http.get("/logout")
    .map(data => data.json()).toPromise()
    .then(response => {
      console.log("Response:", response);
      this.loggedIn = false;
      this.loggedOut = true;
      this.currentUserName = "";
      this.errorMessage = "";
    })
    .catch(err => {
      console.log(err);
      this.errorMessage = "not logged in";
    })
  }

  checkLogin(){
    console.log("check login");
    this._http.get("/checkLogin")
    .map(data => data.json()).toPromise()
    .then(response => {
      if (response) {
        console.log("loggedIn", response);
        this.currentUserName = response;
        this.loggedIn = true;
        this.loggedOut = false;
      } else {
        console.log("loggedOut");
        this.loggedIn = false;
        this.loggedOut = true;
      }
    })
    .catch(err => console.log(err));
  }

  getAccounts(){   // get full list of accounts
    console.log("get accounts");
    this._http.get("/account")
    .map(data => data.json()).toPromise()
    .then(data => {
      this.accounts = data;
      this.errorMessage = "";
    })
    .catch(err => {
      console.log(err);
      this.errorMessage = "cannot get accounts";
    })
  }

}
