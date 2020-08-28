import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EnrolleeComponent } from './enrollee.component';
import { Cards } from './components/cards/card.component';
import { FormsModule } from '@angular/forms';
import {  DialogOne } from './components/dialog/dialog.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    EnrolleeComponent,Cards, DialogOne
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [ DialogOne],
  providers: [],
  bootstrap: [EnrolleeComponent]
})

// Change to enrollee.
export class AppModule { }
