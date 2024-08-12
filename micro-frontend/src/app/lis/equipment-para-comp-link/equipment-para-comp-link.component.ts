import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordsComponent } from '../../common/popups/records/records.component';


export interface equipmentParaLink {
  paramCode: string;
  paramDesc: string;
  componentCode: string;
  componentDesc: string;
}

@Component({
  selector: 'app-equipment-para-comp-link',
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
    CommonModule,],
  templateUrl: './equipment-para-comp-link.component.html',
  styleUrl: './equipment-para-comp-link.component.scss'
})
export class EquipmentParaCompLinkComponent {
  @ViewChild('table1') table!: MatTable<any>;
  displayColumnsData: any
  records: any;
  displayColumns = ['paramCode',  'paramDesc', 'componentCode', 'componentDesc','delete'];
  filterForm!: FormGroup;
  equipmentParaCompMasterData: equipmentParaLink[] = [
    { paramCode: 'ESR',  paramDesc: 'ESR', componentCode:'A-HBS',componentDesc:'Antibody to Hepatitis B Surface Antigen (Anti HBS)' },
    { paramCode: 'ESR',  paramDesc: 'ESR', componentCode:'APTT',componentDesc:'Activated Partial Thromboplastic Time' },
    { paramCode: 'ESR',  paramDesc: 'ESR', componentCode:'BBAC',componentDesc:'Basophilic Stipplings' },
    { paramCode: 'ESR',  paramDesc: 'ESR', componentCode:'BBACB',componentDesc:'Blast/Atypical Cells' },
  ];
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.filterForm = this.fb.group({
      equipmentCode: [{ id: '', value: '' }],
    });
  }
  openComponents() {
    this.records = [
      { componentCode: 'AM', componentDescription: 'Amoxicillin/Clavulanic Acid' },
      { componentCode: 'FOX', componentDescription: 'Cefoxitin' },
      { componentCode: 'LNZ', componentDescription: 'Linezolid' }
  ];
  this.displayColumnsData = { action:'action', componentCode: 'Component Code', componentDescription: 'Component' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Components',
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
  openParameters() {

    this.records = [
      { parameterCode: 'GNB Panel 1', parameterDescription: 'GNB Panel 1' },
      { parameterCode: 'Pseudo Panel', parameterDescription: 'Pseudo Panel' },
      { parameterCode: 'UTI Panel', parameterDescription: 'UTI Panel' }
  ];
  this.displayColumnsData = {action:'action',  parameterCode: 'Parameter Code', parameterDescription: ' Parameter Description' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Parameter',
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
  deleteRow(index: number) {
    this.equipmentParaCompMasterData.splice(index, 1);    
    this.table.renderRows();    
  }
}
