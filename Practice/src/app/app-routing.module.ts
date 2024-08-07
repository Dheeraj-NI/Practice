import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { JoincreationComponent } from './joincreation/joincreation.component';
import { UtilityoperatorComponent } from './utilityoperator/utilityoperator.component';
import { TransformationoperatorComponent } from './transformationoperator/transformationoperator.component';

const routes: Routes = [
  { path: 'creation', component: CreationComponent },
  { path: 'joincreate', component: JoincreationComponent },
  { path: 'utility', component: UtilityoperatorComponent },
  { path: 'transform', component: TransformationoperatorComponent },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
