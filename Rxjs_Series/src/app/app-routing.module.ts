import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'header/1', component: HeaderComponent
    
  },
  {
    path: '', redirectTo: 'header', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
