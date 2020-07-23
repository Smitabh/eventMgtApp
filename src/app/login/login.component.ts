import { Component, OnInit } from '@angular/core';
import { userObject } from '../model/user.model';
import { LoginService } from  '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDataList:userObject;
  errMsg:string;
  invalidLogin:boolean= false;
  

  user = {
    'id':'',
    'userName':'',
    'password':''
 }
  constructor(private loginSrvc:LoginService, private router: Router) { }

  ngOnInit() {
    this.getUserData();
  }
  getUserData(){
    this.loginSrvc.getUserList().
    subscribe(data =>{
      this.userDataList = data.userList;
      //console.log( this.userDataList)
    },error=>{
      console.log("Error");
    })
  }
  Login(){
    this.errMsg = '';
    //console.log(this.user);
    debugger;
      localStorage.setItem("userName",this.user.userName);
      for(let i = 0; i < Object.keys(this.userDataList).length; i++){
        if(this.user.userName == this.userDataList[i].userName && this.user.password == this.userDataList[i].password ){
          this.router.navigate(['/dashboard']);
          break;
        }
        else{
          this.errMsg ='Invalid credential..!';
          this.invalidLogin = true;
          this.router.navigate(['/']);
        }
    }
  }
}
