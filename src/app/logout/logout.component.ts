import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthenticationService
    ) { }

  isUserLoggedOut() {
    this.auth.isUserLoggedOut()
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 3000);
  }

  ngOnInit(): void {
    this.isUserLoggedOut();
  }

}
