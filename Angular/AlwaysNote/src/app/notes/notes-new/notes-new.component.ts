import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../notes.service';
import { Note } from '../../notes';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent implements OnInit {
  notes: Array<Note>;
  note: Note = new Note;

  constructor(private _noteService:NoteService) {
    this.notes = this._noteService.index();
 }

onSubmit() {
  console.log('new note', this.note.noteText);
  this.note.id = this.notes.length;
  this.note.created_at = Date();
  this.note.updated_at = Date();
  this._noteService.create(this.note);
  this.note = new Note;
}
  ngOnInit() {
    // this.notes = this._noteService.notes;
  }

}
