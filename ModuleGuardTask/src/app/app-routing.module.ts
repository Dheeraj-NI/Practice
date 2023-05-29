import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard,  } from './Service/auth.guard'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule), canLoad: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canLoad: [AuthGuard], data: { roles: ['supervisor'] } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
