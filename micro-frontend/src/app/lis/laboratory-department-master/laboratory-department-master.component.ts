import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';


export interface LabDeptManager {
  sectionCode: string;
  sectionName: string;
  isNew?: boolean;
  isEdit?: boolean;
}

@Component({
  selector: 'app-laboratory-department-master',
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
  templateUrl: './laboratory-department-master.component.html',
  styleUrl: './laboratory-department-master.component.scss',
})
export class LaboratoryDepartmentMasterComponent implements OnInit {
  @ViewChild('table1') table!: MatTable<any>;
  @ViewChild('table2') table2!: MatTable<any>;
  displayColumns = ['sectionCode', 'sectionName', 'delete'];
  displayFooterColumns = ['sectionCode', 'delete'];
  labDeptMasterData: LabDeptManager[] = [
    { sectionCode: 'M1', sectionName: 'Swab Section' },
    { sectionCode: 'M3', sectionName: 'Swab Section' },
    { sectionCode: 'M4', sectionName: 'Microbiology Report' },
    { sectionCode: 'M6', sectionName: 'Microbiology Report' },
  ];
  labDeptMaster!: FormGroup;
  filterForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.labDeptMaster = this.fb.group({
      sectionCode: [{id:'',value:''}, Validators.required],   
    });
    this.filterForm = this.fb.group({
      chargeCode: [{id:'',value:''}],
      status:'active'
    })
  }
  addData() {
    if (this.labDeptMaster.valid) {
      this.labDeptMasterData.push({
        sectionCode: this.labDeptMaster.value.sectionCode?.id,
        sectionName: this.labDeptMaster.value.sectionName?.value,        
        isNew: true,
      });
      this.table.renderRows();
      this.table2.renderRows();
      this.labDeptMaster.patchValue({
        sectionCode: {id:'',value:''},        
      });
    }
  }
  deleteRow(index: number) {
    this.labDeptMasterData.splice(index, 1);
    this.table.renderRows();
    this.table2.renderRows();
  }

  editRow(element: LabDeptManager) {
    element.isEdit = true;
  }

  saveRow(element: LabDeptManager) {
    element.isEdit = false;
  }
}
