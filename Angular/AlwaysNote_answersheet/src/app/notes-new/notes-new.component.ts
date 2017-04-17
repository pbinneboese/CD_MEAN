import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent implements OnInit {
  newNote: Note = new Note(1);

  constructor(private _noteService: NoteService) { }
  ngOnInit() {}

  create(){
    this._noteService.create(this.newNote);
    this.newNote = new Note(Math.floor(Math.random()*9999));
  }

}
