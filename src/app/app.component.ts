import { Component } from '@angular/core';
import { HttpRequestService } from './http-request.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'DynaTools';
  address_server : string;
  idEnv : string;
  response : any;
  
  constructor(private httpRequestService :HttpRequestService){

  }

  testConnection(){
    this.response = this.httpRequestService.get(this.address_server + '/' + this.idEnv);
  }
}
