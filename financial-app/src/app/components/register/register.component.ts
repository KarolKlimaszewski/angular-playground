import { Component, OnInit } from '@angular/core';

import { Credentials } from '../../models/auth-credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) { }

  signUp() {
    const credentials: Credentials = {
      email: this.email,
      password: this.password
    }
    console.log(credentials);
    this.authService.signUp(credentials);
    this.email = '';
    this.password = '';
  }
  ngOnInit() {
  }

}
