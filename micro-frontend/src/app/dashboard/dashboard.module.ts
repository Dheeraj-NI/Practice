import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BedTransferRequestComponent } from '../bed-transfer-request/bed-transfer-request.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'lis',
        loadChildren: () =>
          import('./../lis/lis.module').then((m) => m.LisModule),
      },
      {
        path: 'consultation',
        loadChildren: () =>
          import('./../consultation/consultation.module').then((m) => m.ConsultationModule),
      },
      {
        path: 'bed-transfer',
      component:BedTransferRequestComponent
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class DashboardModule {}
