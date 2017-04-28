import { Component } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs";
import { Account } from './users/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello";
  // accounts: Array<Account>;
  currentAccount: Account;
  loggedIn = false;
  loggedOut = true;
  errorMessage = "";

  constructor(private _http: Http){ }

  ngOnInit() {
    this.checkLogin();
  }

  register(account: Account){
    console.log("register account", account);
    this._http.post("/login", account)
    .map(data => data.json()).toPromise()
    .then(response => {
      if (response) {
        this.loggedIn = true;
        this.loggedOut = false;
        this.currentAccount = account;
      }
      else {
        this.errorMessage = "registration failed, try again";
      }
      this.loggedIn = true;
      this.loggedOut = false;
    })
    .catch(err => {
      console.log(err);
      this.errorMessage = "registration failed, try again";
     })
  }

  login(account: Account){
    console.log("login account", account);
    this._http.post("/login", account)
    .map(data => data.json()).toPromise()
    .then(response => {
      if (response) {
        this.loggedIn = true;
        this.loggedOut = false;
        this.currentAccount = account;
      }
      else {
        this.errorMessage = "login failed, try again";
      }
    })
    .catch(err => {
      console.log(err);
      this.errorMessage = "login failed, try again";
    })
  }

  logout(){
    console.log("logout account");
    this._http.get("/logout")
    .map(data => data.json()).toPromise()
    .then(response => {
      console.log("Response:", response);
      this.loggedIn = false;
      this.loggedOut = true;
      this.currentAccount = null;
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
        console.log("loggedIn");
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

}
