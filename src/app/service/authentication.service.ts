import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor() { }

  authenticate(username:  string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return user !== null
  }

  isUserLoggedOut() {
    return sessionStorage.removeItem('username')
    
  }

}
