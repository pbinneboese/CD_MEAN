import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesNewComponent } from './notes-new/notes-new.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';

import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesListComponent,
    NotesNewComponent,
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
