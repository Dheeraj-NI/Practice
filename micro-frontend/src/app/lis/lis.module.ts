import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters/masters.component';
import { DoctorsSignMasterComponent } from './doctors-sign-master/doctors-sign-master.component';
import { EquipmentTestLinkComponent } from './equipment-test-link/equipment-test-link.component';
import { GenericMasterComponent } from './generic-master/generic-master.component';
import { LaboratoryDepartmentMasterComponent } from './laboratory-department-master/laboratory-department-master.component';
import { NoteMasterComponent } from './note-master/note-master.component';
import { OrganismMasterComponent } from './organism-master/organism-master.component';

export const routes: Routes = [
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

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LisModule {}
