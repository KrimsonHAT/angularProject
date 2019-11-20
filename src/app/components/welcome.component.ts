import { Component } from '@angular/core';
import { Button } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: '../views/welcome.component.html',
  styleUrls: ['../views/welcome.component.css']
})

export class WelcomeComponent {  
  welcome: string;


  constructor() {
    this.welcome = 'Hola Bienvenido';
  }
}
