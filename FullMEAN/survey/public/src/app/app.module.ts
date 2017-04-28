import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './survey/login/login.component';
import { ListComponent } from './survey/list/list.component';
import { CreateComponent } from './survey/create/create.component';
import { PollComponent } from './survey/poll/poll.component';
import { SurveyService } from './survey/survey.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoginComponent,
    ListComponent,
    CreateComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
