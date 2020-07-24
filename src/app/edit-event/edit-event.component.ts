import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { eventObject} from '../model/event.model';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event:eventObject;
  editForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private eventService: EventService) { }
  

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      eventId: ['', Validators.required],
      eventName: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.editForm.value);
    //this.eventService.updateEvent(this.editForm.value);
    //this.eventService.putEventSingleData(eventObj);
    this.router.navigate(['/AllEvents']);
  }
}
