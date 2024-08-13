import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { DateComponent } from '../../common/widgets/date/date.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { SearchBarComponent } from '../../common/widgets/search-bar/search-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordsComponent } from '../../common/popups/records/records.component';

export interface updateQc {
  date: string;
  time: string;
  componentCode: string;
  componentDesc: string;
  low: string;
  value: string;
  high: string;
  authorization: boolean;
  autorizedBy: string;
  authorized_Date_Time: string;
}
@Component({
  selector: 'app-update-qc',
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
    DateComponent,
  ],
  providers: [DatePipe],
  templateUrl: './update-qc.component.html',
  styleUrl: './update-qc.component.scss',
})
export class UpdateQcComponent implements OnInit {
  @ViewChild('table1') table!: MatTable<any>;
  filterForm!: FormGroup;
  displayColumnsData: any;
  records: any;
  showToastr: boolean = false;
  displayColumns = [
    'date',
    'time',
    'componentCode',
    'componentDesc',
    'value',
    'low',
    'high',
    'remarks',
    'autorize',
    'authorizedBy',
    'authorize_date_time',
    'delete',
  ];
  updateQCMasterData: updateQc[] = [
    {
      date: '14/07/2024',
      time: '09:37:59',
      componentCode: 'A-HBS',
      componentDesc: 'Antibody to Hepatitis B Surface Antigen (Anti HBS)',
      value: '',
      low: '0.55',
      high: '5.00',
      authorization: false,
      autorizedBy: 'ATC',
      authorized_Date_Time: '',
    },
    {
      date: '14/06/2024',
      time: '08:27:59',
      componentCode: 'APTT',
      componentDesc: 'Activated Partial Thromboplastic Time',
      value: '',
      low: '0.998',
      high: '2.64',
      authorization: false,
      autorizedBy: 'ATC',
      authorized_Date_Time: '',
    },
    {
      date: '08/08/2024',
      time: '10:57:39',
      componentCode: 'BBAC',
      componentDesc: 'Basophilic Stipplings',
      value: '',
      low: '0.678',
      high: '4.88',
      authorization: false,
      autorizedBy: 'ATC',
      authorized_Date_Time:
        this.datePipe.transform(new Date(), 'dd/MM/yy hh:mm:ss') + '',
    },
    {
      date: '01/07/2024',
      time: '08:37:59',
      componentCode: 'BBACB',
      componentDesc: 'Blast/Atypical Cells',
      value: '',
      low: '0.98',
      high: '3.245',
      authorization: false,
      autorizedBy: 'ATC',
      authorized_Date_Time: '',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {}
  createForm() {
    this.filterForm = this.fb.group({
      machineCode: [{ id: '', value: '' }],
      qcCode: [{ id: '', value: '' }],
      lotNo: [''],
      expiryDate: [''],
      fromDate: [''],
      toDate: [''],
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  openLot() {
    this.records = [
      { lotNo: '401283', expiryDate: '31/08/2024' },
      { lotNo: '41247', expiryDate: '07/12/2027' },
      { lotNo: '65472', expiryDate: '14/10/2029' },
    ];
    this.displayColumnsData = {
      action: 'action',
      lotNo: 'Lot No.',
      expiryDate: 'Expriry Date',
    };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Lot',
        isShowSearch: true,
      },
      width: '432px',
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (!res) return;
      console.log(res);
    });
  }
  openRemark() {
    this.records = [
      { helpText: 'Rerun Qc' },
      { helpText: 'Maintenance Done' },
      { helpText: 'Mask the test and run on backup' },
    ];
    this.displayColumnsData = {
      action: 'action',
      helpText: 'Help Text',
    };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Remark Help',
        isShowSearch: true,
      },
      width: '332px',
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (!res) return;
      console.log(res);
    });
  }
  deleteRow(index: number) {
    this.updateQCMasterData.splice(index, 1);
    this.table.renderRows();
  }
  status(ele: any) {
    if (ele.authorization) {
      ele.authorized_Date_Time =  this.datePipe.transform(new Date(), 'dd/MM/yy hh:mm:ss') + '';
       
    }
  }
  valuestatus(ele: any) {
    this.showToastr =
      ele.value && (ele.value < ele.low || ele.value > ele.high);
    setTimeout(() => {
      this.showToastr = false;
    }, 1000);
  }

  updateQcTableCheckboxChange(event: any, data: any) {
    let checkedValue = event.target.checked;
    data.forEach((d: any) => {
      d.authorization = checkedValue;
      d.authorized_Date_Time =  this.datePipe.transform(new Date(), 'dd/MM/yy hh:mm:ss') + '';
    });
  }
  updateQcTableChecked(data: any) {
    let arr: any = [];
    data.forEach((d: any) => {
      arr.push(d);
    });

    if (arr.length === arr.filter((d: any) => d.authorization).length) {
        return true;
    }

    return false;
}
}
