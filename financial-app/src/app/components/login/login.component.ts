import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/auth-credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) { }

  signIn() {
    const credentials: Credentials = {
      email: this.email,
      password: this.password
    }
    console.log(credentials);
    this.authService.signIn(credentials);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authService.signOut();
  }

  ngOnInit() {
    console.log(this.authService.userdata)
  }

}
