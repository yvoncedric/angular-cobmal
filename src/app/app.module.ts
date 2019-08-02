import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  //RouterModule.forRoot([
  //    { path: 'Test1', component:  },
  //  ]) 
  ],
  declarations: [ AppComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
