import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { SelectComponent } from '../../common/widgets/select/select.component';
import { FileComponent } from '../../common/widgets/file/file.component';

@Component({
  selector: 'app-doctors-sign-master',
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
    FileComponent
  ],
  templateUrl: './doctors-sign-master.component.html',
  styleUrl: './doctors-sign-master.component.scss'
})
export class DoctorsSignMasterComponent implements OnInit{
  filterForm!: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.createForm();
  }
  component: any = [{
    label: 'BioChemist',
    value:'1'
}]
  createForm() {
    this.filterForm = this.fb.group({
      signCode: [{ id: '', value: '' }],
      userId: [{ id: '', value: '' }],
      component: '',
      status: 'active',
      digi_sign:''
    });
  }
  openSignCodeSearch() {
    
  }
  openUserSearch() {
    
  }


}
