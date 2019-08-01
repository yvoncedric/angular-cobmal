import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Test1Component } from './test1/test1.component';
import {NgbdDropdownBasicModule} from './dropdown-basic.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbdDropdownBasicModule,
  RouterModule.forRoot([
      { path: 'Test1', component: Test1Component },
    ]) ],
  declarations: [ AppComponent, HelloComponent, Test1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
