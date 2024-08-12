import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../widgets/button/button.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SearchBarComponent } from "../../widgets/search-bar/search-bar.component";

@Component({
    selector: 'app-records',
    standalone: true,
    imports: [CommonModule, FormsModule, MatTableModule, ButtonComponent, SearchBarComponent],
    templateUrl: './records.component.html',
    styleUrl: './records.component.scss'
})
export class RecordsComponent implements OnInit {

    records = [];
    displayColumnsData = {};
    displayColumns: string[] = [];
    displayColumnsValues: string[] = [];
    title: string = '';
    inputTitle: string = '';
    isShowSearch: boolean = false;

    constructor(public dialogRef: MatDialogRef<RecordsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
        this.title = this.data.title;
        this.isShowSearch = this.data.isShowSearch;
        this.records = this.data.records;
        this.inputTitle = this.data.inputTitle || 'Search'
        this.displayColumnsData = this.data.displayColumnsData;
        this.displayColumns = Object.keys(this.displayColumnsData);
        this.displayColumnsValues = Object.values(this.displayColumnsData);
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
