import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      if (this.authService.getUserRole() === 'admin') {
        this.router.navigate(['/category']);
      } else if (this.authService.getUserRole() === 'supervisor') {
        this.router.navigate(['/product']);
      }
    } else {
     alert("Please insert valid userName and Password")
    }
  }
}
