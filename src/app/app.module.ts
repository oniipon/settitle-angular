import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
