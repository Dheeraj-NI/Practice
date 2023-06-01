import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(private route: Router, private authservice: AuthService) {}
  logout() {
    this.authservice.logout();
    this.route.navigate(['/login']);
  

    // let removedata = JSON.parse(localStorage.getItem('myregis') || '')
    localStorage.removeItem('myregis')
    this.route.navigate(['/login']);
  }
}
