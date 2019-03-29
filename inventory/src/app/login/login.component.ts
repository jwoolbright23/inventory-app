import { Component, OnInit } from '@angular/core';
import { Authentication } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "johndw"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(
    private router: Router,
    private Authentication: Authentication,
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.Authentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
