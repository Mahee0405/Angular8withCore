import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  login() {
    this.authService
      .login(this.model)
      .subscribe((response: any) => {}, error => {});
  }

  loggedin() {
    const token= localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
  }

  ngOnInit() {}
}
