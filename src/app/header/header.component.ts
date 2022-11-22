import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(
    private router: Router,
    public auth: AuthenticationService
    ) { }

  isLogged = () => {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    this.router.navigate(['/']);

  }

  ngOnInit(): void {
    this.isLogged();
  }

}
