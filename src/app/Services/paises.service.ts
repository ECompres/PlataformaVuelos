import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PaisesServices {

  constructor(private httpClient: HttpClient) { }

  public url: string = "https://restcountries.eu/rest/v2/all?fields=name";


  getAllCountries(): Observable<any> {
    
    return this.httpClient.get(this.url);
  }

}