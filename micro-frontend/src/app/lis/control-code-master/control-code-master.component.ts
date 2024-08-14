import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { BadgesComponent } from '../../common/widgets/badges/badges.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { SelectComponent } from '../../common/widgets/select/select.component';
import { TextareaComponent } from '../../common/widgets/textarea/textarea.component';
import { SearchBarComponent } from '../../common/widgets/search-bar/search-bar.component';
import { DateComponent } from '../../common/widgets/date/date.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordsComponent } from '../../common/popups/records/records.component';

export interface controlCode {
  compCode: string;
  compDesc: string;
  unit: string;
  low: string;
  high: string;
  mean: string;
  standardDeviation: string;  
  isNew?: boolean;
  isEdit?: boolean;
}
@Component({
  selector: 'app-control-code-master',
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
    SelectComponent,
    BadgesComponent,
    SearchBarComponent,
    DateComponent,
  ],
  templateUrl: './control-code-master.component.html',
  styleUrl: './control-code-master.component.scss',
})
export class ControlCodeMasterComponent {
  @ViewChild('table1') table!: MatTable<any>;
  displayColumnsData: any
  records: any;
  displayColumns = [
    'compCode',
    'compDesc',
    'unit',
    'low',
    'high',
    'mean',
    'standardDeviation',
    'action',
  ];
  filterForm!: FormGroup;
  cntrlCodeMaster!: FormGroup;
  CntrlCodeMasterData: controlCode[] = [
    {
      compCode: 'H1',
      compDesc:
        'COVID-19 antigen tests are',
        unit:'ng/ml',
        low:'23.4',
        high:'50.3',
        mean:'32.2',
        standardDeviation:'32.2'
      
      
    },
    {
      compCode: 'H1',
      compDesc:
        'This is a screening test.',
        unit:'ng/ml',
        low:'23.4',
        high:'39.3',
        mean:'282',
        standardDeviation:'28.2'
      
      
    },
  ];
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.createForm();
  }
  createForm() {
    this.filterForm = this.fb.group({
      equipmentCode: [{ id: '', value: '' }],
      controlCode: [{ id: '', value: '' }],
      lotNo: '',
      expiryDate: '',
      status: 'active',
    });
    this.cntrlCodeMaster = this.fb.group({
      compCode: ['', ],
      compDesc: ['',],
      unit: ['',],
      low: ['',],
      high: ['',],
      mean: ['',],
      st_Deviation: ['',],
    });
  }
  editRow(element: controlCode) {
    element.isEdit = true;
  }

  saveRow(element: controlCode) {
    element.isEdit = false;
  }
  addData() {

    if (this.cntrlCodeMaster.valid) {      
      this.CntrlCodeMasterData.push({
        compCode: this.cntrlCodeMaster.value.compCode,
        compDesc: this.cntrlCodeMaster.value.compDesc,
        unit:this.cntrlCodeMaster.value.unit,
        low:this.cntrlCodeMaster.value.low,
        high:this.cntrlCodeMaster.value.high,
        mean:this.cntrlCodeMaster.value.mean,
        standardDeviation:this.cntrlCodeMaster.value.st_Deviation,        
        isNew: true,
      });
      this.table.renderRows();      
      this.cntrlCodeMaster.patchValue({
        compCode: '',
        compDesc: '',        
        unit:'',
        low:'',
        high:'',
        mean:'',
        st_Deviation:''
      });
    }
  }
  deleteRow(index: number) {
    this.CntrlCodeMasterData.splice(index, 1);    
    this.table.renderRows();    
  }
  openControlCode() {
    this.records = [
      { controlCode: 'BioRad3', controlMaster: 'BioRad3' },
      { controlCode: 'PCU1', controlMaster: 'PCU1' },
      { controlCode: 'TDMC2', controlMaster: 'TDMC2' }
  ];
  this.displayColumnsData = { action:'action', controlCode: 'Control Code', controlMaster: 'Control Master' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Control Code',
        isShowSearch: true,
        
      },
      width: '432px'
    });
    dialogRef.afterClosed().subscribe(
      (res: any) => {
        if (!res) return;
        console.log(res);
        
        
      }
    )
  }
  openLot() {
    this.records = [
      { lotNo: '401283', expiryDate: '31/08/2024' },
      { lotNo: '41247', expiryDate: '07/12/2027' },
      { lotNo: '65472', expiryDate: '14/10/2029' }
  ];
  this.displayColumnsData = { action:'action', lotNo: 'Lot No.', expiryDate: 'Expiry Date' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Lot',
        isShowSearch: true,
        
      },
      width: '432px'
    });
    dialogRef.afterClosed().subscribe(
      (res: any) => {
        if (!res) return;
        console.log(res);
        
        
      }
    )
  }
  openAddComponent() {
    this.records = [
      { componentCode: 'AM', componentDescription: 'Amoxicillin/Clavulanic Acid',compType:'Selection Text',unit:'mmol/per day',formula:'=(xuvol*xucl)' },
      { componentCode: 'FOX', componentDescription: 'Cefoxitin',compType:'Selection Text',unit:'mmol/per day',formula:'=(xuvol*xucl)' },
      { componentCode: 'LNZ', componentDescription: 'Linezolid',compType:'Selection Text',unit:'mmol/per day',formula:'=(xuvol*xucl)' }
  ];
  this.displayColumnsData = { action:'action', componentCode: 'Component Code', componentDescription: 'Component Description',compType:'Component Type',unit:'Unit',formula:'Formula' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Components',
        inputTitle:'Component Description',
        isShowSearch: true,
        
      },
      width: '906px'
    });
    dialogRef.afterClosed().subscribe(
      (res: any) => {
        if (!res) return;
        console.log(res);
        
        
      }
    )
  }
}
