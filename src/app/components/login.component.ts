
import { Component } from '@angular/core';
import { Button } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../views/login.component.html',
  
 })

 export class LoginComponent {
   user: string;
   password: string;
 
   message: string;

   constructor(
     private  _router: Router
) {
 
   
     }
     users =[
      {
        "user": 'fabian',
       "password": 'xx',
      },
      {
        "user": 'renata',
       "password": 'xxx',
      },
      {
        "user": 'esteban',
       "password": 'xxxx',
      },
     
    ]
     login() {
      for(let u of this.users){
        if(u.user == this.user && u.password == this.password){
          this._router.navigate(['/welcome']);
        }
        else{
          this.message = "No eres Usuario Permitido";
        }
      }
     }
 }
