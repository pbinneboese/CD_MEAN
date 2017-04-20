import { WidgetService } from './widget/widget.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(
    private widgetService: WidgetService
  ){}

  willDoSomething(event){
    console.log("AppComponent, willDoSomething(event), event -> ", event);
  }

}
