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
   eventArrList:any =[];
 // private eventArrList: eventObject [] =[];
  private eventSingleData: eventObject [] =[];
    newSingleEventObject:{};
    updatedEventData :any =[];
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
  
    this.eventSingleData = this.eventService.getEventSingleList();
     if (Object.keys(this.eventSingleData).length > 0) {
      this.eventArrList =  this.eventArrList.push(this.eventSingleData);
      }
      console.log('eventArrList:--'+this.eventArrList);

     /*this.updatedEventData  = this.eventService.setAllEventData(this.eventArrList);
     this.eventArrList =  this.updatedEventData;
     console.log('new Event:---', this.updatedEventData);*/
    
    });
  }
  
  ngDestroy(){
   // this.eventService.cleartAllList();
  }

}
