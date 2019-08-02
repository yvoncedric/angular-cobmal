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
  
  constructor(private httpRequestService :HttpRequestService){}

  testConnection(){
   console.log(this.address_server + '/e/' + this.idEnv + '/api/v1/tokens?limit=1000');
   //this.response = this.httpRequestService.get(this.address_server + '/e/' + this.idEnv + '/api/v1/tokens?limit=1000');
  this.response = this.httpRequestService.getTokenList('https://zpm275.dynatrace-managed.com/e/4d933bac-a11c-4fb9-a1a8-e42f906a18aa/api/v1/tokens?limit=1000');
  console.log(JSON.stringify(this.response));
  }
}
