import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationHeaderComponent } from '../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../common/components/top-header/top-header.component';
import { BadgesComponent } from '../common/widgets/badges/badges.component';
import { ButtonComponent } from '../common/widgets/button/button.component';
import { CheckboxComponent } from '../common/widgets/checkbox/checkbox.component';
import { InputComponent } from '../common/widgets/input/input.component';
import { RadioComponent } from '../common/widgets/radio/radio.component';
import { SearchBarComponent } from '../common/widgets/search-bar/search-bar.component';
import { HeadingComponent } from '../common/widgets/heading/heading.component';
import { SelectComponent } from '../common/widgets/select/select.component';
import { DateComponent } from '../common/widgets/date/date.component';
import { TimeComponent } from '../common/widgets/time/time.component';

@Component({
  selector: 'app-bed-transfer-request',
  standalone: true,
  imports: [    TopHeaderComponent,
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
    CheckboxComponent,
    HeadingComponent,
    SelectComponent,
    DateComponent,
    TimeComponent,
  ButtonComponent],
  templateUrl: './bed-transfer-request.component.html',
  styleUrl: './bed-transfer-request.component.scss'
})
export class BedTransferRequestComponent implements OnInit {
  ngOnInit(): void {
    this.createForm();
  }
  constructor(private fb:FormBuilder){}
  patientInfoForm!: FormGroup;
  currentBedInfoForm!: FormGroup;
  requestForm!: FormGroup;
  TransferForm!: FormGroup;
  cases: any = [
    {label:'type1', value:'1'},
    {label:'type2', value:'2'},
    {label:'type3', value:'3'},
  ];
  gender: any[] = [
    {
      label:'Male',value:'1'
    },
    {
      label:'Female',value:'2'
    },
  ]
  createForm() {
    this.patientInfoForm = this.fb.group({
      ipNo: [''],
      patientNo: [''],
      patientName: [''],
      doctor: [{ id: '', value: '' }],
      caseType: [''],
      gender: [''],
      age: [''],
      creditComp: ['']
    })
    this.currentBedInfoForm = this.fb.group({
      wing: [''],
      floor: [''],
      ward: [''],
      room: [''],
      bedId: [''],
      bedType: [''],
      cradleNo: ['']

    })
    this.requestForm = this.fb.group({
      bedReqNo: [''],
      floor: [''],
      ward: [''],
      room: [''],
      bedId: [''],
      bedType: [''],
      cradleNo: ['']
      
    })
    this.TransferForm = this.fb.group({
      date: [''],
      time: [''],
      remarks:['']
  })
  }
  patientNoDialog() { }
  openDoctorDialog(){}
}

