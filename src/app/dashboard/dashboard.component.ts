import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName:string;

  constructor(private router:Router, private eventService:EventService) { }

  ngOnInit() {
   // //.log( localStorage.getItem("userName"));
    this.userName = localStorage.getItem("userName");
  }
  LogOut(){
    this.eventService.cleartAllList();
    this.router.navigate(['/']);
  }
}
