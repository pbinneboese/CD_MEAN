import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from '../../notes.service';
import { Note } from '../../notes';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent {
  @Input() note;
  @Output() deselect = new EventEmitter<boolean>();

  editingNote: Note = new Note();

  constructor(private _noteService:NoteService) { }

  onSubmit() {
    console.log('edit note', this.editingNote.noteText);
    this.editingNote.updated_at = Date();
    this._noteService.update(this.note, this.editingNote);
    this.editingNote = new Note();
    this.deselect.emit();
  }

  deselectTask(){
    this.deselect.emit();
  }

  ngOnInit() {
    this.editingNote.id = this.note.id;
    this.editingNote.noteText = this.note.noteText;
    this.editingNote.created_at = this.note.created_at;
    this.editingNote.updated_at = this.note.updated_at;
  }

}
