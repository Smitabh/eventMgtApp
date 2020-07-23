import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  APIURL= "http://localhost:4200/assets/user.json";

  public getUserList(): Observable<any> {
    debugger
      return this.http.get(this.APIURL,httpOptions).pipe(
        map((response: Response) => {
            return <any>response;
        }),
        catchError((error: HttpErrorResponse) => {
            return Observable.throw(error);
        })
    );
 }

}
