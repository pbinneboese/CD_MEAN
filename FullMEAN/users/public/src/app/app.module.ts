import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersNewComponent } from './users/users-new/users-new.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersShowComponent } from './users/users-show/users-show.component';
import { UsersService } from './users/users.service';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UsersNewComponent,
    UsersEditComponent,
    UsersShowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
