import { WidgetService } from './widget.service';
import { Component, OnInit } from '@angular/core';
import { Widget } from './widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  widgets: Widget[] = [];
  newWidget: Widget = new Widget();

  constructor(private _widgetService: WidgetService) {}

  ngOnInit() { this.getWidgets() }

  getWidgets(){
    this._widgetService.getWidgets()
    .subscribe(widgets => this.widgets = widgets);
  }

  onSubmit(){
    this._widgetService.create(this.newWidget)
    .subscribe(response => this.getWidgets());
    this.newWidget = new Widget();
  }

  destroy(widget: Widget){
    this._widgetService.destroy(widget)
    .subscribe(response => this.getWidgets());
  }


}
