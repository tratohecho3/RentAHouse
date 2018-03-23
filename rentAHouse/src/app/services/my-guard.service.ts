import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class MyGuardService {

  loggedIn = false;
  constructor(private authService: AuthorizationService){
    authService.isLogged()
      .subscribe(result => {
        if(result && result.uid){
          this.loggedIn = true;
        }

        else{
          this.loggedIn = false;
        }
      },error=> this.loggedIn = false)
  }

  canActivate(){
    return this.loggedIn;
  }
}
