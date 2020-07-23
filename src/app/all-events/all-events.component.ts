import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { eventObject } from '../model/event.model';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  arrData:any= [];
  //eventArrList:any =[];
  private eventArrList: eventObject [] =[];
  newEventArray:any = {};

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.getEventInfo();
  }
  
  getEventInfo(){
    this.eventService.getEventList().
    subscribe(data =>{
     this.arrData = data;
     this.eventArrList = this.arrData.eventList;
     if(this.eventService.getEventAllList().length > 0){
     this.newEventArray = this.eventService.getEventAllList();
     this.eventArrList.push( this.newEventArray );
     }
     console.log('arraylist===>',this.eventArrList);
    // console.log( 'data', this.eventArrList);
    })
  }

}
