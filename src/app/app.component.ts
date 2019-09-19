import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  
  constructor(private http :HttpClient){}

  testConnection(){
   console.log(this.address_server + '/e/' + this.idEnv + '/api/v1/tokens?limit=1000');
   //this.response = this.httpRequestService.get(this.address_server + '/e/' + this.idEnv + '/api/v1/tokens?limit=1000');
   let headers = new HttpHeaders()
    headers = headers.set('Authorization', 'Api-Token OuN7mzcDT9-6lHq04l6nC');
    this.http.request('GET', 'https://zpm275.dynatrace-managed.com/e/4d933bac-a11c-4fb9-a1a8-e42f906a18aa/api/v1/timeseries/com.dynatrace.builtin:app.apdex?includeData=true&startTimestamp=1561647600000&endTimestamp=1561734000000&aggregationType=COUNT&tag=ESRC', { headers })
        .subscribe(
          res => {
            this.response = res;
            console.log('Result:', res)
          },
          err => {
            console.log('Error', err);
            this.response = err;
          },
        )
  console.log(JSON.stringify(this.response));
  }
}
