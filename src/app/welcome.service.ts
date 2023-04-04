import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  private baseUrl = 'http://localhost:9080/welcome';

  constructor(private httpClient : HttpClient) { }

  // function to access backend rest api (HTTP GET Request)
  
  getWelcomeMsg(){
    return this.httpClient.get(this.baseUrl, {responseType: 'text'});
  }
  
}