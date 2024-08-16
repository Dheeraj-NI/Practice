import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationDashboardComponent } from './consultation-dashboard/consultation-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: ConsultationDashboardComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConsultationModule { }
