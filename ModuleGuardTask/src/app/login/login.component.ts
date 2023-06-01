import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    if (this.authService.login(this.loginPage.value.username, this.loginPage.value.password)) {
      if (this.authService.userRole == 'admin') {
        this.router.navigate(['/category']);
      }
      else if (this.authService.userRole == 'supervisor') {
        this.router.navigate(['/product']);
      }
    
      else {
        // Show error message or perform other actions for failed login
      }
    }
  }
  // public isLoggedIn = false;
  // public userRole: string = '';
  // register: any;

 

  // fetchUserRole() {
  //   this.fetchId(
  //     this.loginPage.value.username,
  //     this.loginPage.value.password
  //   ).subscribe(
  //     (role) => {
  //       if (role) {
  //         this.userRole = role;
  //         console.log(' Role:', this.userRole);
  //         // Do something with the retrieved ID
  //       } else {
  //         console.log('Invalid username or password');
  //         // Handle the case when username and password combination is not found
  //       }
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //       // Handle the error
  //     }
  //   );
  // }
  // Make sure to replace the console.log statements with the desired logic to handle the retrieved ID or invalid credentials.

  // Note: The above code assumes that you have already set up the Angular application, imported the HttpClientModule in the root module (app.module.ts), and configured the necessary HTTP headers or other settings if required for your JSON server.

  // fetchId(username: any, password: any): Observable<string> {
  //   const url = 'http://localhost:3000/register'; // Replace with your JSON data URL

  //   return this.http.get<any[]>(url).pipe(
  //     tap((resp) => this.getRole(resp)),
  //     map((data) => {
  //       const user = data.find(
  //         (item) =>
  //           item.userName === this.loginPage.value.username &&
  //           item.password === this.loginPage.value.password
  //       );
  //       return user ? user.role : null;
  //     })
  //   );
  // }

  // getUserData(): Observable<any> {
  //   const url = 'http://localhost:3000/register'; // Replace with your JSON data URL

  //   return this.http.get<any>(url);
  // }

  // getRole(data: any) {
  //   const user = data.find(
  //     (item: any) =>
  //       item.userName === this.loginPage.value.username &&
  //       item.password === this.loginPage.value.password
  //   );
  //   this.userRole = user ? user.role : null;
  //   console.log(this.userRole + '     jfhjasdhf');
  // }
  // getUsernamePasswordRole(): Observable<{
  //   username: string;
  //   password: string;
  //   role: string;
  // }> {
  //   return this.getUserData().pipe(
  //     map((data) => ({
  //       username: data.username,

  //       password: data.password,
  //       role: data.role,
  //     }))
  //   );
  // }

  // login() {
  //   this.authService
  //     .checkCredentials()
  //     .pipe(tap((resp) => this.getRole(resp)))
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.register = res.find((a: any) => {
  //         return (
  //           a.userName == this.loginPage.value.username &&
  //           a.password == this.loginPage.value.password
  //         );
  //       });
      

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
  // }

  // isAuthenticated(): boolean {
  //   return !this.isLoggedIn;
  // }
  // getUserRole(): string {
  //   return this.userRole;
  // }
}
