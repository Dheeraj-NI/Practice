import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  loginPage = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login(): void {
    if (
      this.authService.login(
        this.loginPage.value.username,
        this.loginPage.value.password
      )
    ) {
      this.router.navigate(
        this.authService.userRole == 'admin' ? ['/category'] :
        this.authService.userRole == 'supervisor' ? ['/category'] :
        this.authService.userRole == 'user' ? ['/home'] :
        ['/login']
      );
      
    }
  }
}
