import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  selectedNote: boolean = false;
  editableNote: Note = null;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {}

  destroy(note: Note){
    if (this.editableNote === note) this.selectedNote = false;
    this._noteService.destroy(note);
  }

  edit(note: Note){
    this.deselectTask();
    this.editableNote = note;
    this.selectedNote = true;
  }

  deselectTask(){
    this.selectedNote = false;
  }

}
