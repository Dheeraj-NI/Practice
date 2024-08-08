import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectComponent } from '../../common/widgets/select/select.component';
import { BadgesComponent } from '../../common/widgets/badges/badges.component';
import { TextareaComponent } from '../../common/widgets/textarea/textarea.component';

export interface Note {
  helpCode: string;
  helpDesc: string;
  status: string;
  sortOrder: string;
  isNew?: boolean;
  isEdit?: boolean;
}
@Component({
  selector: 'app-note-master',
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
    TextareaComponent

  ],
  templateUrl: './note-master.component.html',
  styleUrl: './note-master.component.scss',
})
export class NoteMasterComponent implements OnInit {
  @ViewChild('table1') table!: MatTable<any>;
  displayColumns = ['helpCode','helpDesc','sortOrder','status','action'];
  filterForm!: FormGroup;
  noteMaster!: FormGroup;  
  noteType: any[] = [
    {
      label:'Test',value:'test'
    },
    {
      label:'Test1',value:'test1'
    },
  ]
  dept: any[] = [
    {
      label:'Department',value:'department'
    },
    {
      label:'Department1',value:'department1'
    },
  ]
  noteMasterData: Note[] = [
    {
      helpCode: 'H1',      
      helpDesc:
        'COVID-19 antigen tests are designed for the rapid diagnoses of active infection primarily by detecting the nucleocapsid protein antigen of the SARS-CoV-2 virus (the virus that causes COVID-19) from nasal swabs or similar clinical specimens.',
      status: 'active',
      sortOrder: '1'
    },
    {
      helpCode: 'H1',      
      helpDesc:
        'This is a screening test. Advised confirmation by IGM captures ELISA',
      status: 'inactive',
      sortOrder : '2'
    },
  ];
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.filterForm = this.fb.group({
      noteType: '',
      dept: '',
    });
    this.noteMaster = this.fb.group({
      helpCode: ['', Validators.required],
      helpDesc: ['', Validators.required],
      sortOrder :['',Validators.required],
      status: ['active', Validators.required],
    });
  }
  editRow(element: Note) {
    element.isEdit = true;
  }

  saveRow(element: Note) {
    element.isEdit = false;
  }
  addData() {

    if (this.noteMaster.valid) {      
      this.noteMasterData.push({
        helpCode: this.noteMaster.value.helpCode,
        helpDesc: this.noteMaster.value.helpDesc,
        sortOrder : this.noteMaster.value.sortOrder,
        status: this.noteMaster.value.status,
        isNew: true,
      });
      this.table.renderRows();      
      this.noteMaster.patchValue({
        helpCode: '',
        helpDesc: '',
        status: 'active',
        sortOrder: '',
      });
    }
  }
  deleteRow(index: number) {
    this.noteMasterData.splice(index, 1);    
    this.table.renderRows();    
  }
  setActiveInactive(value: string) {
    this.noteMaster.controls['status'].patchValue(value);
  }
  editActiveInactive(value: string,element:any) {
    if (element.isEdit) {
      element.status = value;
  }
  }
}
