import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class AuthorizationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signUp(email:string, password:string){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(response => {
        alert("Registered User");
      })
      .catch(err =>{
        alert("Error");
        console.log(err);
      })


  }
}
