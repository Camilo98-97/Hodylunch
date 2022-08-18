import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  lastName: string = '';
  city: string = '';
  address: string = '';
  phoneNumber: number = 0;
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.city);
    console.log(this.address);
    console.log(this.phoneNumber);
    console.log(this.email);
    console.log(this.password);
  }

}
