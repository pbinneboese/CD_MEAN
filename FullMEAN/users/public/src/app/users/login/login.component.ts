import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from './../../app.component';
import { Account } from './../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loggedOut: boolean;
  @Input() errorMessage: string;
  @Input() currentAccount: Account;
  account: Account = new Account();
  password2: string = "";

  constructor(private _appComponent: AppComponent) { }

  ngOnInit() {
  }

  onLogin() {
    this.errorMessage = "";
    this._appComponent.login(this.account);
  }
  onRegister() {
    this.errorMessage = "";
    if (this.password2 != this.account.password) {
      this.errorMessage = "passwords do not match";
    } else {
      this._appComponent.register(this.account);
    }
  }
  onLogout() {
    this.errorMessage = "";
    this._appComponent.logout();
    this.account.email = "";
    this.account.password = "";
    this.account.firstName = "";
    this.account.lastName = "";
    this.password2 = "";
  }
}
