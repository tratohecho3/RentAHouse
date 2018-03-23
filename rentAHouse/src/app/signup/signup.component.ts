import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registry: any = {};
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  signUp(){
    this.authService.signUp(this.registry.email,this.registry.password);
  }


}
