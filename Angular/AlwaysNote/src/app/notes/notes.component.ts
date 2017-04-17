import { Component, OnInit } from '@angular/core';
import { NoteService } from '../notes.service';
import { Note } from '../notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
  }

}
