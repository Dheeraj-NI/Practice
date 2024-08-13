import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../common/components/top-header/top-header.component';
import { ButtonComponent } from '../common/widgets/button/button.component';
import { InputComponent } from '../common/widgets/input/input.component';
import { RadioComponent } from '../common/widgets/radio/radio.component';
import { SelectComponent } from '../common/widgets/select/select.component';

@Component({
  selector: 'app-control-code-master-barcode',
  standalone: true,
  imports: [
    TopHeaderComponent,
    NavigationHeaderComponent,
    TitleHeaderComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SelectComponent,
  ],
  templateUrl: './control-code-master-barcode.component.html',
  styleUrl: './control-code-master-barcode.component.scss',
})
export class ControlCodeMasterBarcodeComponent implements OnInit {
  filterForm!: FormGroup;
  dept: any[] = [
    {
      label: 'Department',
      value: 'department',
    },
    {
      label: 'Department1',
      value: 'department1',
    },
  ];
  constructor(private fb: FormBuilder) {}
  createForm() {
    this.filterForm = this.fb.group({
      machineCode: [{ id: '', value: '' }],
      type: '',
      noControls: '',
    });
  }
  ngOnInit(): void {
    this.createForm();
  }
}
