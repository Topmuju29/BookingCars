import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  Value: any = {};
  A: Number = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.Value);
  }
  LoggedIn () {

  }
  register() {
    this.router.navigate(['register']);
  }
  logout(data) {
    this.A = data;
  }

}
