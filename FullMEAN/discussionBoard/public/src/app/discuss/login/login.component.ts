import { Component, OnInit, Input } from '@angular/core';
import { DiscussService } from './../discuss.service';
import { DiscussComponent } from './../discuss.component';
import { Topic } from '../topic';
import { Account } from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loggedIn: boolean;
  @Input() loggedOut: boolean;
  @Input() currentUserName: string;
  account: Account = new Account("", "");

  constructor(private _discussComponent: DiscussComponent) { }

  ngOnInit() {
  }

  onLogin() {
    this._discussComponent.login(this.account);
  }
  // onRegister() {
  //   this._discussComponent.register(this.account);
  // }
  onLogout() {
    this._discussComponent.logout();
    this.account.userName = "";
  }

}
