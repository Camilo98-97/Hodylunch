import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
      });
  }

  ngOnInit(): void {
  }

}
