import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

const token='OuN7mzcDT9-6lHq04l6nC';

@Injectable()
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  getTokenList(url:string){
    console.log('service / '+url);
    return this.http.get(url, httpOptions);
  }
}