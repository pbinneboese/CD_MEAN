import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsShowComponent } from './items/items-show/items-show.component';
import { ItemsService } from './items/items.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsNewComponent,
    ItemsEditComponent,
    ItemsShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
