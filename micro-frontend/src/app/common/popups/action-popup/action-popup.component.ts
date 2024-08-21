import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../widgets/button/button.component';
import { SearchBarComponent } from '../../widgets/search-bar/search-bar.component';
import { InputComponent } from '../../widgets/input/input.component';

@Component({
  selector: 'app-action-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, ButtonComponent, SearchBarComponent,InputComponent],
  templateUrl: './action-popup.component.html',
  styleUrl: './action-popup.component.scss'
})
export class ActionPopupComponent {

  records = [];
  displayColumnsData = {};
  displayColumns: string[] = [];
  displayColumnsValues: string[] = [];
  title: string = '';
  inputTitle: string = '';
  isShowSearch: boolean = false;
  titleImg: string = '';

  constructor(public dialogRef: MatDialogRef<ActionPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
      this.title = this.data.title;
      this.isShowSearch = this.data.isShowSearch;
    this.records = this.data.records;
    this.titleImg = this.data.titleImg;
      this.inputTitle = this.data.inputTitle || 'Search'
      this.displayColumnsData = this.data.displayColumnsData;
      this.displayColumns = Object.keys(this.displayColumnsData);
      this.displayColumnsValues = Object.values(this.displayColumnsData);
  }

  closeDialog(isData: boolean) {
    if (isData) {
      
      this.dialogRef.close(this.displayColumnsData);
    } else {
      this.dialogRef.close();
    }
  }
}
