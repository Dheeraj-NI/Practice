import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TimeComponent } from '../../common/widgets/time/time.component';
import { RecordsComponent } from '../../common/popups/records/records.component';

export interface Organism {
  compCode: string;
  compDesc: string;
  value: string;
  unit: string;
  paramCode: string;
}
@Component({
  selector: 'app-manual-qc',
  standalone: true,
  imports:[
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
    TimeComponent,
  ],
  templateUrl: './manual-qc.component.html',
  styleUrl: './manual-qc.component.scss'
})
export class ManualQcComponent implements OnInit {
  @ViewChild('table1') table!: MatTable<any>;
  @ViewChild('table2') table2!: MatTable<any>;
  filterForm!: FormGroup;
  displayColumnsData: any;
  records: any;
  displayColumns = ['compCode', 'compDesc', 'value', 'unit', 'paramCode', 'delete'];
  manualQcData: Organism[] = [
    { compCode: 'LD', compDesc: 'Lactate Dehryogenase EZ' , unit:'0.92',paramCode:'98',value:''},
    { compCode: 'AN', compDesc: 'Amikacin' , unit:'0.87',paramCode:'83',value:''},
    { compCode: 'LD', compDesc: 'Lactate Dehryogenase EZ' , unit:'0.54',paramCode:'98',value:''},
    { compCode: 'NZ', compDesc: 'Linezolid' , unit:'0.99',paramCode:'97',value:''},
  ];
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,

  ) { }
  createForm() {
    this.filterForm = this.fb.group({
      machineCode: [{ id: '', value: '' }],
      qcCode: [{ id: '', value: '' }],
      lotNo: [''],
      expiryDate: [''],
      date: [''],
      time: [''],
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
    });
  }
  deleteRow(index: number) {
    this.manualQcData.splice(index, 1);    
    this.table.renderRows();    
    this.table2.renderRows();    
  }
}
