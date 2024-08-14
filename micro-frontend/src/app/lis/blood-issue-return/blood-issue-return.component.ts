import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { DateComponent } from '../../common/widgets/date/date.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { SelectComponent } from '../../common/widgets/select/select.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchBarComponent } from '../../common/widgets/search-bar/search-bar.component';
import { RecordsComponent } from '../../common/popups/records/records.component';
import { ActionPopupComponent } from '../../common/popups/action-popup/action-popup.component';

@Component({
  selector: 'app-blood-issue-return',
  standalone: true,
  imports: [TopHeaderComponent,
    NavigationHeaderComponent,
    TitleHeaderComponent,
    InputComponent,    
    ButtonComponent,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DateComponent,
    SelectComponent,
  SearchBarComponent],
  templateUrl: './blood-issue-return.component.html',
  styleUrl: './blood-issue-return.component.scss'
})
export class BloodIssueReturnComponent implements OnInit {
  filterForm!: FormGroup;
  records: any;
  displayColumnsData: any;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,

  ) { }
  ngOnInit(): void {
    this.createForm();
  }
  gender: any[] = [
    {
      label:'Male',value:'1'
    },
    {
      label:'Female',value:'2'
    },
  ]
  location: any[] = [
    { label:'India', value:'1'},
    { label:'USA', value:'3'},
  ]
  group: any[] = [
    { label:'A+',value:'1'},
    { label:'A-',value:'2'},
    { label:'AB+',value:'3'},
    { label:'AB-',value:'4'},
    { label:'O+',value:'5'},
    

  ]
  rh: any[] = [
    {
      label:'POS',value:'2'
    }
  ]
  comp: any[] = [
    {label:'comp1',value:'comp1'},
    {label:'comp2',value:'comp2'},
  ]
  returnType: any[] = [
    { label:'r1',value:'t1'},
    { label:'r2',value:'t2'}
  ]
  fridge: any[] = [
    {
      label:'f1', value:'1'
    },
    {
      label:'f2', value:'2'
    },
  ]
  shelf: any[] = [
    {
      label:'s1', value:'1'
    },
    {
      label:'s2', value:'2'
    },
  ]
  createForm() {
    this.filterForm = this.fb.group({
      requestNo: [''],
      bloodId: [''],
      bloodSr: [''],
      issueNo: [''],
      patientNo: [''],
      gender: [''],
      dob: [''],
      civilId: [''],
      hospNo: [''],
      passwordNo: [''],
      location: [''],
      phoneNo: [{ id: '+91', value: '' }],
      group: [''],
      rh: [''],
      f_name: [''],
      m_name: [''],
      l_name: [''],
      roomNo: [''],
      bedNo: [''],
      notes: [''],
      receivedDate: [''],
      expiryDate: [''],
      issueDate: [''],
      component: [''],
      bloodqty: [''],
      unit: [''],
      returnType: [''],
      fridge: [''],
      shelf: [''],
      remarks:['']     
    });
  }
  openRequestDialog() {
    this.records = [
      { requestNo:'202600123',issueNo:'302000394',bloodId:'K555012308154D',bloodIdSrNo:'0' },
      { requestNo:'202600123',issueNo:'302000394',bloodId:'K555012308154D',bloodIdSrNo:'0' },
      { requestNo:'202600123',issueNo:'302000394',bloodId:'K555012308154D',bloodIdSrNo:'0' },

  ];
  this.displayColumnsData = { requestNo: 'Request No.', issueNo: 'Issue No.',bloodId:'Blood ID', bloodIdSrNo:'Blood ID Sr. No.', view: '', };
    const dialogRef = this.dialog.open(ActionPopupComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Request No Leave',        
        
      },
      width: '50%'
    });
    dialogRef.afterClosed().subscribe(
      (res: any) => {
        if (!res) return;
        console.log(res);
        
        
      }
    )
  }
}
