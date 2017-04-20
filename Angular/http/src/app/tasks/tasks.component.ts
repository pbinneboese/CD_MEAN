import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../http.service';
import { Task } from '../task';
import { Observable } from 'rxjs';
import "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<Task>;
  task: Task = new Task(0, "", "", "");
  // private data: Observable<Array<number>>;
  // myObservable: Observable<number>;

  constructor(private _httpService: HttpService) {
  }

  createTask() {
    console.log('new task', this.task.title);
    this.task.id = this.tasks.length;
    this.task.created_at = Date();
    this.tasks.push(this.task);
    this._httpService.create(this.task)
    .subscribe(
      (data: Response) => { console.log("created task", data.json()) },
      (err: Error) => { console.log("failed task", err) },
      () => { this.index() }  // regenerate task list after adding new task
    )
    this.task = new Task(0, "", "", "");
  }

  createPromise() { // another way to regenerate task list via a Promise
    this._httpService.indexPromise()
    .then(
      (data: Response) => console.log("Promise", data.json()),
      (err) => console.log(err)
    )
    .catch((err: Response) => console.log(err))
  }

  ngOnInit() {
    this.index();
  }

  index() { // fetch task data from server
    this._httpService.index()
    .subscribe(
      (data: Response) => {
        console.log("fetched data", data);
        // console.log("fetched data", data.json());
        // write fetched data into tasks array
        var temp = [];
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            temp.push(data[key]);
            data[key].id = key;
          }
        }
        this.tasks = temp;
      },
      (err: Error) => { console.log("failed data fetch", err) },
      () => { console.log("what's next?") }
    )
  }

}
