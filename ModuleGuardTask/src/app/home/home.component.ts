import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: Router, private authservice: AuthService,) {}
  logout() {
    this.authservice.logout();
    this.route.navigate(['/login']);
  

    // let removedata = JSON.parse(localStorage.getItem('myregis') || '')
    localStorage.removeItem('myregis')
    this.route.navigate(['/login']);
  }
}
