import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { SearchBarComponent } from '../../common/widgets/search-bar/search-bar.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-consultation-dashboard',
  standalone: true,
  imports: [
    TopHeaderComponent,
    NavigationHeaderComponent,
    TitleHeaderComponent,
    InputComponent,
    RadioComponent,
    ButtonComponent,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchBarComponent,
    MatTabsModule
  ],
  templateUrl: './consultation-dashboard.component.html',
  styleUrl: './consultation-dashboard.component.scss'
})
export class ConsultationDashboardComponent {
  @ViewChild('table1') table!: MatTable<any>;
}
