import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';
import { MatDialog } from '@angular/material/dialog';
import { RecordsComponent } from '../../common/popups/records/records.component';
import { SearchBarComponent } from '../../common/widgets/search-bar/search-bar.component';
import { DateComponent } from '../../common/widgets/date/date.component';

@Component({
  selector: 'app-review-qc',
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
    DateComponent
  ],
  templateUrl: './review-qc.component.html',
  styleUrl: './review-qc.component.scss',
})
export class ReviewQCComponent implements OnInit {
  filterForm!: FormGroup;
  displayColumnsData: any
  records: any;
  constructor(private fb: FormBuilder,private dialog: MatDialog) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.filterForm = this.fb.group({
      machineCode: [{ id: '', value: '' }],
      qcCode: [{ id: '', value: '' }],
      compCode: [{ id: '', value: '' }],
      lotNo: [''],
      expiryDate: [''],
      fromDate: [''],
      toDate: [''],
    });
  }
  openLot() {
    this.records = [
      { lotNo: '401283', expiryDate: '31/08/2024' },
      { lotNo: '41247', expiryDate: '07/12/2027' },
      { lotNo: '65472', expiryDate: '14/10/2029' }
  ];
  this.displayColumnsData = { action:'action', lotNo: 'Lot No.', expiryDate: 'Expriry Date' };
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
}
