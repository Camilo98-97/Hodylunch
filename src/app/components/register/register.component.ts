import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

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

  constructor( public userService: UsersService ) { }

  ngOnInit(): void {
  }

  register() {
    const user = {  
      name: this.name,
      lastName: this.lastName,
      city: this.city,
      address: this.address,
      phonenumber: this.phoneNumber,
      email: this.email,
      password: this.password
    };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
    });
  }

}
