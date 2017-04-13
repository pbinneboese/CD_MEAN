import { Injectable } from '@angular/core';
import { Note } from './note';
@Injectable()
export class NoteService {
  notes: Array<Note>  = [
    new Note("First Note", "this is the first note"),
    new Note("Second Note", "this is the second note")
  ]
  constructor() { }

}
