import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { eventObject, EventList } from '../model/event.model';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  arrData: any = [];
  eventArrList: EventList[] = [];

  constructor(private eventService: EventService) { }

 async ngOnInit() {
    // console.log('length====>',this.eventService.getEventSingleList().length)
    if (this.eventService.getEventSingleList().length > 0) {
      this.eventArrList = await this.eventService.getEventSingleList();
    } else {
      this.getEventInfo();
    }
  }
  getEventInfo() {
    this.eventService.getEventList().
      subscribe(data => {
        this.eventArrList = data.eventList;
    
      });
  }

  ngDestroy() {
    // this.eventService.cleartAllList();
  }
}
