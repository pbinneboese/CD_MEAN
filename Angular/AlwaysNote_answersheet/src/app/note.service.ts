import { Injectable } from '@angular/core';
import { Note } from './note';


@Injectable()
export class NoteService {
  note: Note;
  notes: Note[] = [];

  constructor() { }

  create(newNote: Note){
    this.notes.push(newNote);
  }

  destroy(note: Note){
    const i = this.notes.indexOf(note);
    this.notes.splice(i,1);
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
