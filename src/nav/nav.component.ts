import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertyfy.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  login() {
    this.authService.login(this.model).subscribe(
      (response: any) => {
        this.alertify.success('Logged in sucessfully...');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  loggedin() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedin();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }

  ngOnInit() {}
}
