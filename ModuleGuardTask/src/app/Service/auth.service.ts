import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private userRole: string='';

  login(username: string, password: string): boolean {
    // Make API call for authentication, validate credentials
    // For simplicity, we'll hard-code the values
    if (username === 'admin' && password === 'admin123') {
      this.isLoggedIn = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'supervisor' && password === 'supervisor123') {
      this.isLoggedIn = true;
      this.userRole = 'supervisor';
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = '';
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserRole(): string {
    return this.userRole;
  }
}
