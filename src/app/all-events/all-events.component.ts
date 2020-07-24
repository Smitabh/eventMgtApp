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
    // eventArrList:any[] =[];
    eventArrList: eventObject [] =[];
    updatedEventArray :any[] =[];
    oldEventArray :any =[];

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.getEventInfo();
    this.oldEventArray = this.eventService.getEventAllDtls();
  }
  getEventInfo(){
    this.eventService.getEventList().
    subscribe(data =>{
     this.arrData = data;
     this.eventArrList = this.arrData.eventList;
    
     let eventSingleData:any ;
     eventSingleData = this.eventService.getEventSingleList();

     if (Object.keys(eventSingleData).length > 0) {
          this.eventArrList.push(eventSingleData);
         console.log('data',this.eventArrList);
      }
      else{
        this.eventArrList = this.arrData.eventList;
      }
      
     // console.log('updatedEventArray:--'+this.updatedEventArray);
      //console.log('eventArrList--',this.eventArrList);
    
    });
  }
  
  ngDestroy(){
   // this.eventService.cleartAllList();
  }

}
