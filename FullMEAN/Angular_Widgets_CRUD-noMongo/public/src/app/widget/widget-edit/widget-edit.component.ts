import { WidgetService } from './../widget.service';
import { Widget } from './../widget';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  @Input() widget: Widget;
  editableWidget: Widget = new Widget();
  @Output() updateWidgets = new EventEmitter();

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() {
    Object.assign(this.editableWidget, this.widget);
  }

  onUpdate(){
    this._widgetService.update(this.editableWidget)
    .subscribe(widget => {
      this.widget.editable = false
      this.updateWidgets.emit();
    });
  }

}
