import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BedTransferRequestComponent } from '../bed-transfer-request/bed-transfer-request.component';
import { ConsultationDashboardComponent } from '../consultation/consultation-dashboard/consultation-dashboard.component';
import { ClassTransferRequestComponent } from '../class-transfer-request/class-transfer-request.component';
import { AssignDoctorRequestComponent } from '../assign-doctor-request/assign-doctor-request.component';
import { ServiceMasterComponent } from '../service-master/service-master.component';

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
        component:ConsultationDashboardComponent
      },
      {
        path: 'bed-transfer',
      component:BedTransferRequestComponent
      },
      {
        path: 'class-transfer',
      component:ClassTransferRequestComponent
      },
      {
        path: 'assign-doctor',
      component:AssignDoctorRequestComponent
      },
      {
        path: 'service-master',
      component:ServiceMasterComponent
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class DashboardModule {}
