import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { NotesComponent } from './notes/notes.component';
import { TaskPublicComponent } from './task/task-public/task-public.component';
import { TaskPrivateComponent } from './task/task-private/task-private.component';
import { NotesPublicComponent } from './notes/notes-public/notes-public.component';
import { NotesPrivateComponent } from './notes/notes-private/notes-private.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NotesComponent,
    TaskPublicComponent,
    TaskPrivateComponent,
    NotesPublicComponent,
    NotesPrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
