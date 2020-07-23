import { Injectable } from '@angular/core';
import { eventObject } from '../model/event.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  constructor(private http: HttpClient) { }
  APIURL= "http://localhost:4200/assets/event.json";

private eventSingleData: eventObject [] =[];

 public getEventList(): Observable<eventObject> {
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
 putEventSingleData(data){
    this.eventSingleData = data;
 }
 getEventAllList(): eventObject[] {
    return this.eventSingleData;
 }
 
 cleartAllList():void{
  this.eventSingleData=[];
 }
}