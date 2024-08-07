import { CommonModule } from '@angular/common';
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
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordsComponent } from '../../common/popups/records/records.component';

export interface Organism {
  antibioticCode: string;
  antibioticDesc: string;
}

@Component({
  selector: 'app-organism-master',
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
  ],
  templateUrl: './organism-master.component.html',
  styleUrl: './organism-master.component.scss',
})
export class OrganismMasterComponent implements OnInit {
  @ViewChild('table1') table!: MatTable<any>;
  @ViewChild('table2') table2!: MatTable<any>;
  records: any;
  displayColumnsData:any
  displayColumns = ['antibioticCode', 'antibioticDesc'];
  filterForm!: FormGroup;
  organismMasterData: Organism[] = [
    { antibioticCode: 'AM', antibioticDesc: 'Amoxicillin/Clavulanic Acid' },
    { antibioticCode: 'AN', antibioticDesc: 'Amikacin' },
    { antibioticCode: 'FOX', antibioticDesc: 'Cefoxitin' },
    { antibioticCode: 'NZ', antibioticDesc: 'Linezolid' },
  ];
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.filterForm = this.fb.group({
      organismCode: [{ id: '', value: '' }],
      panelCode: [{ id: '', value: '' }],
    });
  }
  openOrganismSearch() {
    this.records = [
      { antibioticCode: 'AM', antibioticDescription: 'Amoxicillin/Clavulanic Acid' },
      { antibioticCode: 'FOX', antibioticDescription: 'Cefoxitin' },
      { antibioticCode: 'LNZ', antibioticDescription: 'Linezolid' }
  ];
  this.displayColumnsData = { action:'action', antibioticCode: 'Antibiotic Code', antibioticDescription: 'Antibiotic Description' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Organism Master List',
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
  openPanelSearch() {

    this.records = [
      { Code: 'GNB Panel 1', Description: 'GNB Panel 1' },
      { Code: 'Pseudo Panel', Description: 'Pseudo Panel' },
      { Code: 'UTI Panel', Description: 'UTI Panel' }
  ];
  this.displayColumnsData = {action:'action',  Code: 'Code', Description: 'Description' };
    const dialogRef = this.dialog.open(RecordsComponent, {
      data: {
        records: this.records,
        displayColumnsData: this.displayColumnsData,
        title: 'Panel Master List',
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
}
