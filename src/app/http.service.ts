import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient :HttpClient) { }
  Getbeer()
  {
    return this.httpclient.get('https://api.openbrewerydb.org/breweries');
  }
}
