import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../notes.service';
import { Note } from '../../notes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  selectedNote: boolean = false;
  editableNote: Note = null;

  notes: Array<Note>;

  constructor(private _noteService:NoteService) {
    this.notes = this._noteService.index();
  }

  onDelete(note:Note) {
    console.log("Deleting", note.id);
    if (this.editableNote === note) this.selectedNote = false;
    this._noteService.destroy(note);
  }

  onEdit(note:Note) {
    console.log("Editing", note.id);
    this.deselectTask();
    this.editableNote = note;
    this.selectedNote = true;
  }

  deselectTask(){
    this.selectedNote = false;
  }

  ngOnInit() {
  }

}
