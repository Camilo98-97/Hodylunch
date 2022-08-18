import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';

  constructor() {}

  login(){
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {
  }

}
