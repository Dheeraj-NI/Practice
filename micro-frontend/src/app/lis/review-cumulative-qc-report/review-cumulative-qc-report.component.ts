import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { TwoRecordsComponent } from '../../common/popups/two-records/two-records.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { DateComponent } from '../../common/widgets/date/date.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { SelectComponent } from '../../common/widgets/select/select.component';
export interface reviewQcReport {
  compName: string;
}

@Component({
  selector: 'app-review-cumulative-qc-report',
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
    DateComponent,
    SelectComponent
  ],
  templateUrl: './review-cumulative-qc-report.component.html',
  styleUrl: './review-cumulative-qc-report.component.scss',
})
export class ReviewCumulativeQcReportComponent implements OnInit{
  @ViewChild('table1') table!: MatTable<any>;
  @ViewChild('table2') table2!: MatTable<any>;
  filterForm!: FormGroup;
  displayColumnsData: any;
  records: any;
  displayColumns = ['compName', 'reports','action'];
  dept: any[] = [
    {
      label:'Department',value:'department'
    },
    {
      label:'Department1',value:'department1'
    },
  ]
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,

  ) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.filterForm = this.fb.group({
      dept: [''],
      fromDate: [''],
      toDate: [''],      
    });
  }
  reviewQcReportData: reviewQcReport[] = [
    { compName: 'Hemoglobin'},
    { compName: 'WBC'},
    { compName: 'Plateletes'},
    { compName: 'CBC'},
  ];
  openEquipment() {
    let tableData :any = [
      {
        name: 'ACL Top 500',
        childs: [
          { controlCode:'qo-612000810',control:'qo-612000810' },
          { controlCode:'qo-612000818',control:'qo-612000880' },
          { controlCode:'qo-612000843',control:'qo-612000867' },
        ]
      },
      {
        name: 'ACL Top 3002',
        childs: [
          { controlCode:'qo-612000810',control:'qo-612000810' },
          { controlCode:'qo-612000818',control:'qo-612000880' },
          { controlCode:'qo-612000843',control:'qo-612000867' },
          { controlCode:'qo-612000853',control:'qo-612000863' },
          { controlCode:'qo-6120008473',control:'qo-612000864' },
          { controlCode:'qo-6120008453',control:'qo-612000861' },
        ]
      },
      {
        name: 'Alinity',
        childs: [
          { controlCode:'qo-612000810',control:'qo-612000810' },
          { controlCode:'qo-612000818',control:'qo-612000880' },
          { controlCode:'qo-612000843',control:'qo-612000867' },
          { controlCode:'qo-612000853',control:'qo-612000863' },
          { controlCode:'qo-6120008473',control:'qo-612000864' },
          { controlCode: 'qo-6120008453', control: 'qo-612000861' },
          { controlCode:'qo-612000810',control:'qo-612000810' },
 
        ]
      },
      {
        name: 'StagoMax B Wafra',
        childs: [
          { controlCode:'qo-612000810',control:'qo-612000810' },
          { controlCode:'qo-612000810',control:'qo-612000810' },
          { controlCode:'qo-612000818',control:'qo-612000880' },
          { controlCode:'qo-612000843',control:'qo-612000867' },
          { controlCode:'qo-612000853',control:'qo-612000863' },

        ]
      },
      {
        name: 'Starrsed',
        childs: [
          { controlCode:'qo-612000810',control:'qo-612000810' },
         
        ]
      },
      {
        name: 'Sysmex 550 Wafra',
        childs: [
          { controlCode:'qo-612000810',control:'qo-612000810' },
          
        ]
      },
    ]
    this.records =
      [
      { lotNo: '401283', expiryDate: '31/08/2024' },
      { lotNo: '41247', expiryDate: '07/12/2027' },
      { lotNo: '65472', expiryDate: '14/10/2029' },
    ];
    this.displayColumnsData = {
      action: 'action',
      controlCode: 'Control Code',
      control: 'Control',
    };
    const dialogRef = this.dialog.open(TwoRecordsComponent, {
      data: {
        maintable: tableData,
        displayColumnsData: this.displayColumnsData,
        title: 'Equipment Master', 
        header_tile:'Equipment Name',
        noRecordsMessage:'Select Equipment Name to view control codes'
      },
      width: '50%',
      height:'448px'
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (!res) return;      
    });
  }
  exportRow(index: any) {
    
  }
}
