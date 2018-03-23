import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;
  user = null;
  constructor(private authService: AuthorizationService){
    authService.isLogged()
    .subscribe(result => {
      if(result && result.uid){
        this.loggedIn = true;
        this.user = this.authService.getUser().currentUser.email;
      }

      else{
        this.loggedIn = false;
      }
    },error=> this.loggedIn = false)

  }
  logout(){
    this.authService.logout();
  }


}
