import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: string;

  buttonState: boolean = false;
  buttonText: string = "Click to Complete";
  taskText: string = "Incomplete";
  buttonColor: string = "red";

  buttonToggle() {
    if (!this.buttonState) {
      this.buttonState = true;
      this.buttonText = "Click to mark Incomplete";
      this.taskText = "Completed";
      this.buttonColor = "green";
    }
    else {
      this.buttonState = false;
      this.buttonText = "Click to Complete";
      this.taskText = "Incomplete";
      this.buttonColor = "red";
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
