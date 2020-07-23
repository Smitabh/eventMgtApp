import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventMgtApp';
  userName : string;

  ngOnInit(){
   // console.log( localStorage.getItem("userName"));
    this.userName = localStorage.getItem("userName");
  }

}
