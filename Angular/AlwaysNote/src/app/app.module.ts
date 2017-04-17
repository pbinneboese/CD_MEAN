import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesNewComponent } from './notes/notes-new/notes-new.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesEditComponent } from './notes/notes-edit/notes-edit.component';
import { NoteService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesNewComponent,
    NotesListComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
