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
import { BadgesComponent } from '../../common/widgets/badges/badges.component';
import { CheckboxComponent } from '../../common/widgets/checkbox/checkbox.component';

export interface Note {
  ipNo: string;
  patientName: string;
  token: string;
  checkIn: string;
  call: string;
  status: string;
  closed: string;
  cancel: boolean;
  reschedule: boolean;
  noShow: boolean;
  doctor: string;
  speciality: string;
}
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
    MatTabsModule,
    BadgesComponent,
    CheckboxComponent
  ],
  templateUrl: './consultation-dashboard.component.html',
  styleUrl: './consultation-dashboard.component.scss'
})
export class ConsultationDashboardComponent {
  @ViewChild('table1') table!: MatTable<any>;
  displayColumns = ['action','ipNo', 'patientName', 'token', 'checkIn', 'call', 'status', 'closed', 'cancel', 'reschedule', 'noShow', 'doctor', 'speciality'];
  consultationData: Note[] = [
    {
      ipNo: '7797461279',      
      patientName:
        'Nysaa Paresh Gala',
      token: '21',
      checkIn: '23:49',
      call:'23:58',
      status: 'Rescheduled',
      closed: '16:47',
      cancel: false,
      reschedule: true,
      noShow: false,
      doctor: 'Dr. Castellino Neil Wilbur',
      speciality:'General Medicine'      
    },
    {
      ipNo: '7797443679',      
      patientName:
        'Mukesh J. Sharma',
      token: '21',
      checkIn: '23:49',
      call:'23:58',
      status: 'In Progress',
      closed: '16:47',
      cancel: false,
      reschedule: false,
      noShow: false,
      doctor: 'Dr. Castellino Neil Wilbur',
      speciality:'General Medicine'      
    },
    {
      ipNo: '7797561279',      
      patientName:
        'Abhijeet Shantilal Kumar',
      token: '21',
      checkIn: '23:49',
      call:'23:58',
      status: 'Cancelled',
      closed: '16:47',
      cancel: true,
      reschedule: true,
      noShow: false,
      doctor: 'Dr. Castellino Neil Wilbur',
      speciality:'General Medicine'      
    },

  ];
}
