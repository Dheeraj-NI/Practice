import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationHeaderComponent } from '../../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../../common/widgets/button/button.component';
import { DateComponent } from '../../../common/widgets/date/date.component';
import { HeadingComponent } from '../../../common/widgets/heading/heading.component';
import { InputComponent } from '../../../common/widgets/input/input.component';
import { SearchBarComponent } from '../../../common/widgets/search-bar/search-bar.component';
import { SelectComponent } from '../../../common/widgets/select/select.component';
import { TimeComponent } from '../../../common/widgets/time/time.component';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialog } from '@angular/material/dialog';
import { ServiceHelpComponent } from '../../../common/popups/service-help/service-help.component';
import { BarcodeScanComponent } from '../../../common/popups/barcode-scan/barcode-scan.component';
import { ActionPopupComponent } from '../../../common/popups/action-popup/action-popup.component';
export interface Access_Barcode {
  dept: string;
  testCode: string;
  test_Desc: string;
}

@Component({
  selector: 'app-accession-barcode',
  standalone: true,
  imports: [
    TopHeaderComponent,
    NavigationHeaderComponent,
    TitleHeaderComponent,
    InputComponent,
    ButtonComponent,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchBarComponent,
    MatTabsModule,
    HeadingComponent,
    SelectComponent,
    DateComponent,
    TimeComponent,
    ButtonComponent,
    MatExpansionModule
  ],
  templateUrl: './accession-barcode.component.html',
  styleUrl: './accession-barcode.component.scss',
})
export class AccessionBarcodeComponent implements OnInit {
  @ViewChild('table1') table!: MatTable<any>;
  @ViewChild('table2') table2!: MatTable<any>;
  records: any;
  displayColumnsData: any;
  displayColumns = [
    'dept',
    'testCode',
    'test_Desc',    
    'enter_Dept',    
    'action',
  ];
  AccessBarcodeData: Access_Barcode[] = [
    { testCode: 'T30339', dept: 'Hematology' , test_Desc: 'Activated Partial Thromboplastin'},
    { testCode: 'T30339', dept: 'Hematology' , test_Desc: 'Activated Partial Thromboplastin'},
    { testCode: 'T30339', dept: 'Hematology' , test_Desc: 'Activated Partial Thromboplastin'},
    { testCode: 'T30339', dept: 'Hematology' , test_Desc: 'Activated Partial Thromboplastin'},
  ];
  filterForm!: FormGroup;
  gender: any[] = [
    {
      label: 'Male',
      value: '1',
    },
    {
      label: 'Female',
      value: '2',
    },
  ];
  locationType: any = [
    {
      label: 'India', value: 1
    },
    {
      label: 'Kuwait', value: 2
    },
  ];
  urgentStatus: any=[
    {
label:'Urgent',value:1
    },
    {
label:'Not Urgent',value:2
    },
  ]
  ngOnInit(): void {
    this.createForm();
  }
  constructor(private fb: FormBuilder, private dialog:MatDialog) {}
  createForm() {
    this.filterForm = this.fb.group({
      civilId: [''],
      hosp_No: [''],
      passport: [''],
      nationality: [''],
      patientNo: [''],
      f_Name: [''],
      m_Name: [''],
      l_Name: [''],
      arabic_Name: [''],
      gender: [''],
      dob: [''],
      age: [''],
      loc_type: [''],
      location: [''],
      ordering_doc: [{ id: '', value: '' }],
      urgent_status: [''],
      policyNo: [''],
      policy_type: [''],
      roomNo: [''],
      bedNo: [''],
      sampleDate: [''],
      sampleTime: [''],
      policy_end_date: [''],
      policy_amt: [''],
      mobileNo: [''],
      tele_No: [''],
      received_date: [''],
      received_time: [''],
      emailId: [''],
      remarks: [''],
    });
  }
  civilMasterDialog() { }
  hospitalMasterDialog() { }
  openDoctorDialog() { }
  deleteRow(index: number) {
    this.AccessBarcodeData.splice(index, 1);    
    this.table.renderRows();    
    this.table2.renderRows();    
  }

  openServiceHelp() {
    this.dialog.open(ServiceHelpComponent, {
      data: {
        title: 'Service Help'
        
      },
      width:'800px'
  })
}
  openBarcodeDialog() {
    this.dialog.open(BarcodeScanComponent, {
      data: {
        title: 'Barcode Scan'
        
      },
      width:'40%'
  })
  }
  openAdditionalParamsDialog() {
    this.records = [
      { code:'HT',desc:'Height',value:'', },
      { code:'UC',desc:'Urine Collected',value:'', },
      { code:'WT',desc:'Weight',value:'', },

  ];
  this.displayColumnsData = { code: 'Code', desc: 'Description',value: 'Value', };
    const dialogRef = this.dialog.open(ActionPopupComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Additional Parameter Details', 
        titleImg: 'assets/svg images/tube.svg',
          btnType:'close'
        
      },
      width: '40%'
    });
    dialogRef.afterClosed().subscribe(
      (res: any) => {
        if (!res) return;
        console.log(res);
        
        
      }
    )
  }

}

