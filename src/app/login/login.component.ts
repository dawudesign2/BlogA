import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'admin';
  password: string = 'admin';
  errMessage: string = 'Invalid Credentials';
  inValidLogin = false;

  constructor(
    private router: Router,
    public auth: AuthenticationService
    ) {}

  handlerLogin() {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
    }
  }

  ngOnInit(): void {}
}
