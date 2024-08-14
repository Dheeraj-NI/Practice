import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../widgets/button/button.component';
import { SearchBarComponent } from '../../widgets/search-bar/search-bar.component';
import { RecordsComponent } from '../records/records.component';

@Component({
  selector: 'app-two-records',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    ButtonComponent,
    SearchBarComponent,
  ],
  templateUrl: './two-records.component.html',
  styleUrl: './two-records.component.scss',
})
export class TwoRecordsComponent implements OnInit {
  mainTable: any = [];
  records = [];
  header_tile: any = '';
  displayColumnsData = {};
  displayColumns: string[] = [];
  displayColumnsValues: string[] = [];
  title: string = '';
  inputTitle: string = '';
  isShowSearch: boolean = false;
  noRecordsMessage: string = '';
  selectedChild: any;

  constructor(
    public dialogRef: MatDialogRef<RecordsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.isShowSearch = this.data.isShowSearch;
    this.mainTable = this.data.maintable;
    this.header_tile = this.data.header_tile;
    this.inputTitle = this.data.inputTitle || 'Search';
    this.displayColumnsData = this.data.displayColumnsData;
    this.displayColumns = Object.keys(this.displayColumnsData);
    this.displayColumnsValues = Object.values(this.displayColumnsData);

    this.noRecordsMessage = this.data.noRecordsMessage;
    console.log(this.mainTable);
  }

  closeDialog() {
    this.dialogRef.close();
  }
  selectedItem(item: any) {    
    if (item && item.childs) {
      this.records = item.childs;
      this.selectedChild = item;
    } else {
      this.records = [];
    }
  }
  isSelected(item: any) {
    return this.selectedChild == item;
  }
}
