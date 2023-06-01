import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  implements CanLoad{
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      const roles = route.data?.['roles'] as Array<string>;
      if (roles && roles.includes(this.authService.getUserRole())) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   if (this.authService.isAuthenticated()) {
  //     const roles = route.data?.['roles'] as Array<string>;
  //     if (roles) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/login']);
  //       return false;
  //     }
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }

  // }
  // roles: any;

  canActivate(currentUser: any) {
    if (currentUser) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // }
}
export const authenticateGuard: CanActivateFn = (route, state) => {
  let token = JSON.parse(localStorage.getItem('myregis') || '');
  const roles = route.data?.['roles'] as Array<string>; 
  if (roles) return inject(AuthGuard).canActivate(token)
  return true;
}
