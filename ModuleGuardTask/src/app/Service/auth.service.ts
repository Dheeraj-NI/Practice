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
    // Make API call for authentication, validate credentials
    // For simplicity, we'll hard-code the values

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

  // else if (this.userRole == 'supervisor') {
  //           this.isLoggedIn = true;
  //           this.router.navigate(['/product']);
  //         } else if (this.userRole == 'user') {
  //           this.isLoggedIn = true;
  //           this.router.navigate(['/home']);
  //         }
  //       } else {
  //         this.isLoggedIn = false;
  //         alert('Please insert valid userName and Password');
  //       }
  //  if (username === 'admin' && password === 'admin123') {
  //   this.isLoggedIn = true;
  //   this.userRole = 'admin';
  //   return true;
  // } else if (username === 'supervisor' && password === 'supervisor123') {
  //   this.isLoggedIn = true;
  //   this.userRole = 'supervisor';
  //   return true;
  //  }

  // login() {
  //

  //       if (this.register) {
  //         localStorage.setItem('myregis', JSON.stringify(this.register));
  //         if (this.userRole == 'admin') {
  //           this.isLoggedIn = true;
  //           this.router.navigate(['/category']);
  //         } else if (this.userRole == 'supervisor') {
  //           this.isLoggedIn = true;
  //           this.router.navigate(['/product']);
  //         } else if (this.userRole == 'user') {
  //           this.isLoggedIn = true;
  //           this.router.navigate(['/home']);
  //         }
  //       } else {
  //         this.isLoggedIn = false;
  //         alert('Please insert valid userName and Password');
  //       }
  //     });

  getRole(data: any) {
    const user = data.find(
      (item: any) => item.userName == this.user && item.password == this.pass
    );
    this.userRole = user ? user.role : null;
    console.log('Role is '+this.userRole);
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
