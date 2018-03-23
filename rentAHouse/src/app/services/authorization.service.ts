import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthorizationService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  signUp(email:string, password:string){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(response => {
        alert("Registered User");
        this.router.navigate(['rentalproperties']);
      })
      .catch(err =>{
        alert("Error");
        console.log(err);
      })


  }

  login(email:string,password:string){
    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
      .then(response => {
        alert("Successful login");
        this.router.navigate(['rentalproperties']);
      })
      .catch(err => {
        alert("Error");
        console.log(err);
      })
  }

  
  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(resultado => {
        alert("Successful login");
        this.router.navigate(['rentalproperties']);
      })
      .catch(error => {
        alert("Error");
        console.log(error);
      })
  }
  logout(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['login'])
  }
  isLogged(){ 
    return this.angularFireAuth.authState;
  }

  public getUser(){
    return this.angularFireAuth.auth;
  }
}
