import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  APIURL= "http://localhost:4200/assets/Countries.json";
  constructor(private http:HttpClient) { }

  allCountries(): Observable<any>{
    return this.http.get(this.APIURL);
  }
}
