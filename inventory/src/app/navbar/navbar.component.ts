import { Component, OnInit } from '@angular/core';
import { Authentication } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn : boolean = false;

  constructor(
    private authentication:Authentication
  ) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authentication.isUserLoggedIn();
  }

}
