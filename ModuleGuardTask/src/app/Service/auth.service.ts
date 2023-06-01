import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private router: Router) {}
  private isLoggedIn = false;
  public userRole: string = '';
  register: any;
  user: any;
  pass: any;

  saveData(data: any) {
    return this._http.post('http://localhost:3000/register', data);
  }
  checkCredentials() {
    return this._http.get<any>('http://localhost:3000/register');
  }

  login(username: any, password: any): boolean {
    this.user = username;
    this.pass = password;

    this.checkCredentials()
      .pipe(tap((resp) => this.getRole(resp)))
      .subscribe((res) => {
        console.log(res);
        this.register = res.find((a: any) => {
          return a.userName == username && a.password == password;
        });
      });
    if (this.register) {
      localStorage.setItem('myregis', JSON.stringify(this.register));
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }
  getRole(data: any) {
    const user = data.find(
      (item: any) => item.userName == this.user && item.password == this.pass
    );
    this.userRole = user ? user.role : null;
    console.log('Role is ' + this.userRole);
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
