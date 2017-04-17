import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent {
  @Input() note;
  @Output() deselect = new EventEmitter<boolean>();

  editingNote: Note = new Note();

  constructor(private _noteService: NoteService){}
  
  ngOnInit() {
    this.editingNote.id = this.note.id;
    this.editingNote.content = this.note.content;
    this.editingNote.important = this.note.important;
    this.editingNote.archived = this.note.archived;
    this.editingNote.created_at = this.note.created_at;
  }

  update(){
    this._noteService.update(this.note, this.editingNote);
    this.editingNote = new Note();
    this.deselect.emit();
  }

  deselectTask(){
    this.deselect.emit();
  }

}
