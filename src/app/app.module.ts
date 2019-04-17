import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzNgLibModule } from 'ez-ng-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EzNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
