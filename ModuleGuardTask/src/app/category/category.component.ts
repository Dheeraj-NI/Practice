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

  Role(): boolean {
    return this.authservice.userRole == 'supervisor';
  }

  products() {
    this.route.navigate(['/product'])
  }
  logout() {
    this.authservice.logout();

    localStorage.removeItem('myregis');
    this.route.navigate(['/login']);
  }
}
