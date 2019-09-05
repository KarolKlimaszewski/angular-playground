import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Credentials } from '../models/auth-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userdata = angularFireAuth.authState;
   }

  signIn({email, password} : Credentials) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(`Successfully logged in.`);
      })
      .catch(err => {
        console.error(`Something is wrong: ${err.message}`);
      })
  }

  signUp({email, password} : Credentials) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password) 
      .then(res => {
        console.log(`Successfully created account for email ${email}`);
      })
      .catch(err => {
        console.error(`Something is wrong: ${err.message}`);
      })
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
  }
}
