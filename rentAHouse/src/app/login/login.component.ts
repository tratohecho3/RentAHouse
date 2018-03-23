import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registry: any = {};
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.registry.email,this.registry.password);

  }
  cancel(){
    this.registry = {}
  }
}
