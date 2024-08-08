import { Routes } from '@angular/router';
import { GenericMasterComponent } from './lis/generic-master/generic-master.component';
import { LaboratoryDepartmentMasterComponent } from './lis/laboratory-department-master/laboratory-department-master.component';
import { EquipmentTestLinkComponent } from './lis/equipment-test-link/equipment-test-link.component';
import { MastersComponent } from './masters/masters.component';
import { OrganismMasterComponent } from './lis/organism-master/organism-master.component';
import { NoteMasterComponent } from './lis/note-master/note-master.component';
import { DoctorsSignMasterComponent } from './lis/doctors-sign-master/doctors-sign-master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'generic-master',
    component: GenericMasterComponent,
  },
  {
    path: 'lab-dept-master',
    component: LaboratoryDepartmentMasterComponent,
  },
  {
    path: 'equip-test-link',
    component: EquipmentTestLinkComponent,
  },
  {
    path: 'organism-master',
    component: OrganismMasterComponent,
  },
  {
    path: 'note-master',
    component: NoteMasterComponent,
  },
  {
    path: 'doctors-sign-master',
    component: DoctorsSignMasterComponent,
  },
  {
    path: 'master',
    component: MastersComponent,
  },
];
