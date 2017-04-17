import { Injectable } from '@angular/core';
import { Note } from './notes';

@Injectable()
export class NoteService {
  notes: Array<Note> = [
    new Note(1, "First note...", Date(), Date()),
    new Note(7460, "Second note...", Date(), Date()),
    new Note(5064, "Third note, drink coffee...", Date(), Date()),
    new Note(5034, "Always Code!", Date(), Date())
  ]

  editedNote: Note;
  selectedNote: Note; // note selected for edit/update

  constructor() { }

  index(){
    return this.notes;
  }
  create(note:Note){
    this.notes.push(note);
  }
  destroy(note:Note){
    const idx = this.notes.indexOf(note);
    this.notes.splice(idx, 1);
  }
  edit(note:Note) {
    this.editedNote = note;
    console.log("Service editing", this.editedNote);
  }

  selectNote(note:Note){
    this.selectedNote = note;
  }
  getSelected(){
    return this.selectedNote;
  }
  update(note: Note, editingNote: Note): boolean{
    for(var i = 0; i < this.notes.length; i++){
      if (this.notes[i].id == note.id){
        this.notes[i] = editingNote;
        console.log("FOUND!");
        return true;
      }
    }
    // return false;
  }

}
