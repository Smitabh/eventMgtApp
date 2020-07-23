import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { HttpClient, HttpResponse, HttpEventType} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
declare var require: any ;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [DatePipe]
})
export class CreateEventComponent implements OnInit {
  eventList:any = [];
  event = {
    'eventId':'',
    'eventName':'',
    'eventDate':'',
    'etime':'',
    'Price':'',
    'Country':'',
    'StateId':'',
    'CityId':'',
    'creationDate':'',
    'url':'',
    'eventImageUrl':''
  }
  Country:string;
  State:string;
  city:string;
 // eventArrList:any =[];
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  todaysDate = new Date();
  eventDate = '';
  etime='';
  percentDone: number;
  uploadSuccess: boolean;
  eventImgName;
  imgname;
  urlPath:string;
  path:any;
  // showtbl:boolean=false;
  // isNewEvent:boolean= true;
  constructor(private country:CountriesService,  private eventService:EventService , private http: HttpClient, private datePipe: DatePipe, private router : Router) { 
    this.eventDate = this.datePipe.transform(this.todaysDate, 'MM/dd/yyyy');
    this.etime = this.datePipe.transform(this.todaysDate, 'MM/dd/yyyy hh:mm a'); 
  }

  ngOnInit() {
    // this.urlPath = this.router.routerState.snapshot.url;
    // if(this.urlPath == '/AllEvents'){
    //   this.showtbl = true;
    //   this.isNewEvent = false;   
    //   this.getEventInfo(); 
    // }
    // else{
    //   this.showtbl = false;
    //   this.isNewEvent = true ;
    //   this.getCountries();
    // }
    this.getCountries();
  }
  
  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
       // console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }
  
  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
   // console.log(this.cityInfo);
  }
  
  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
  SaveEvent(data):any{ 
    let cntryId = data.CountryId;
    this.Country = this.countryInfo[cntryId].CountryName;
    let StateId = data.StateId;
    this.State = this.stateInfo[StateId].StateName;
    let cityId = data.CityId;
    this.city =  this.cityInfo[cityId];
    let img =  this.eventImgName;
    
    let eventObj= { eventId: data.eventId, 
                     eventName: data.eventName, eventDate: data.eventDate,
                     etime:data.etime ,Price:data.Price,
                     Country:this.Country,StateName:this.State,
                     CityName:this.city,url:data.url,
                     eventImageUrl:img
     } 
   
   this.eventService.putEventSingleData(eventObj);
   this.router.navigate(['/AllEvents']);
   this.event.eventId ='';
   this.event.eventName ='';
   this.event.eventDate ='';
   this.event.etime ='';
   this.event.Price ='';
   this.event.Country ='';
   this.event.StateId ='';
   this.event.CityId = '';
   this.event.url = '';
  }
   
    upload(files: File[]){
      //pick from one of the 4 styles of file uploads below
      this.uploadAndProgress(files);
    }
   
    uploadAndProgress(files: File[]){
     // console.log(files)
      this.eventImgName = files[0].name;
     //console.log(this.eventImgName, files)
      var formData = new FormData();
      Array.from(files).forEach(f => formData.append('file',f))
      
      this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentDone = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.uploadSuccess = true;
             //this.imgname= require("../../assets/img/"+this.eventImgName);
            // console.log(this.imgname);
          }
      });
    } 
  
}
