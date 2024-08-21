import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent } from '../../widgets/button/button.component';
import { SelectComponent } from '../../widgets/select/select.component';
import { SearchBarComponent } from '../../widgets/search-bar/search-bar.component';
import { MultipleSearchComponent } from '../../widgets/multiple-search/multiple-search.component';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from "../../widgets/checkbox/checkbox.component";

@Component({
    selector: 'app-service-help',
    standalone: true,
    imports: [
    ButtonComponent,
    SelectComponent,
    SearchBarComponent,
    MultipleSearchComponent,
    CommonModule,
    CheckboxComponent
],
    templateUrl: './service-help.component.html',
    styleUrl: './service-help.component.scss'
})
export class ServiceHelpComponent implements OnInit {

    title: string = '';
    list1 = ['Abdomen & Pelvis', 'Anesthesia Standby', 'Brain with PNS', 'CD Review', 'Chest, Abdomen, Pelvis Contrast'];
    list2 = ['Anesthesiologist Charges', 'Brain & Orbits', 'Brain with Sella', 'Cervical Spine', 'Chest Pain'];

    constructor(public dialogRef: MatDialogRef<ServiceHelpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        
    }

    ngOnInit(): void {
        this.title = this.data.title;
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
