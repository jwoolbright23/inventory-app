import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  constructor() { }

  authenticate(username, password) {
    if(username === "johndw" && password === "letsgo"){
      sessionStorage.setItem("authenticateUser", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticateUser")
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem("authenticateUser")
  }
}
