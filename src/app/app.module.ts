import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './http-request.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,
  //RouterModule.forRoot([
  //    { path: 'Test1', component:  },
  //  ]) 
  ],
  declarations: [ AppComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [HttpRequestService]
})
export class AppModule { }
