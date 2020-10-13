import { Component, OnInit } from '@angular/core';

import { Empleado } from "../../models/Empleado";
import { UserService } from 'src/app/services/user.service';
import { Route, Router } from '@angular/router';
//import { User } from 'src/app/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public token;
  public identity;
  public data_error;

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {

    this.user = new Empleado('','','','','','')
    this.identity = this._userService.getIdentity();
   }

   ngOnInit():void {
    if(this.identity){
      this._router.navigate(['dashboard']);
    }
  }

  close_alert(){
    this.data_error = '';
  }

  login(loginForm){
    if(loginForm.valid){
      console.log(loginForm.value);
      this._userService.login(this.user).subscribe(
        response =>{
          console.log(response);
          this.token = response.jwt;
          localStorage.setItem('token',this.token);
          this._userService.login(this.user,true).subscribe(
            response=>{
              console.log(response);
              localStorage.setItem('identity',JSON.stringify(response.user));
              this._router.navigate(['dashboard']);
              
            },
            error =>{

            }
          )
        },
        error =>{
          this.data_error =error.error.message;
        }
      );

    }else{

    }
  }

}
