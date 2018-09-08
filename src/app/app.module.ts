import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule} from './app.routing';
import { ViewparentComponent } from './viewparent/viewparent.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ExampleformComponent } from './exampleform/exampleform.component';
import { DisplayformComponent } from './displayform/displayform.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ViewparentComponent,
    ViewchildrenComponent,
    ExampleformComponent,
    DisplayformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
