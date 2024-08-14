import { Component } from '@angular/core';
import { ButtonComponent } from '../common/widgets/button/button.component';
import { InputComponent } from '../common/widgets/input/input.component';
import { DateComponent } from '../common/widgets/date/date.component';
import { TimeComponent } from '../common/widgets/time/time.component';
import { BadgesComponent } from '../common/widgets/badges/badges.component';
import { SelectComponent } from "../common/widgets/select/select.component";
import { CheckboxComponent } from "../common/widgets/checkbox/checkbox.component";
import { RadioComponent } from "../common/widgets/radio/radio.component";
import { SearchBarComponent } from "../common/widgets/search-bar/search-bar.component";
import { HeadingComponent } from '../common/widgets/heading/heading.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FileComponent } from "../common/widgets/file/file.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { TopHeaderComponent } from "../common/components/top-header/top-header.component";
import { MatDialog } from '@angular/material/dialog'; 
import { RecordsComponent } from '../common/popups/records/records.component';
import { UploadProgramComponent } from '../common/popups/upload-program/upload-program.component';


@Component({
    selector: 'app-design-system',
    standalone: true,
    imports: [ButtonComponent, InputComponent, DateComponent, TimeComponent, BadgesComponent, SelectComponent, CheckboxComponent, RadioComponent, SearchBarComponent, HeadingComponent, MatTabsModule, FileComponent, FormsModule, JsonPipe, TopHeaderComponent, ReactiveFormsModule],
    templateUrl: './design-system.component.html',
    styleUrl: './design-system.component.scss'
})
export class DesignSystemComponent {
    value: string = '123';
    passportForm = {
        id: '12',
        value: 'Deep'
    }
    date = new Date().toISOString().split('T')[0];
    select = '';
    options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    passportNumberForm = new FormGroup({
        number: new FormControl('', [Validators.required])
    });

    // passportNumberForm = new FormGroup({
    //     passportForm: {
    //         id: new FormControl(''),
    //         number: new FormControl('')
    //     }
    // })

    records = [
        { componentCode: '17OHPROG30', componentDescription: '17 OH Program 30 Min', type: 'Variable Text', formula: '-' },
        { componentCode: '17OHPROG30', componentDescription: '17 OH Program 30 Min', type: 'Variable Text', formula: '-' },
        { componentCode: '17OHPROG30', componentDescription: '17 OH Program 30 Min', type: 'Variable Text', formula: '-' },
        { componentCode: '17OHPROG30', componentDescription: '17 OH Program 30 Min', type: 'Variable Text', formula: '-' }
    ];
    displayColumnsData = { action: 'Action', componentCode: 'Component Code', componentDescription: 'Component Description', type: 'Type', formula: 'Formula' };

    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(RecordsComponent, {
            data: { records: this.records, displayColumnsData: this.displayColumnsData, title: 'Select Record' }
        });
      
        // dialogRef.afterClosed().subscribe(result => {
        //     // console.log('The dialog was closed');
        //     if (result !== undefined) {
        //         // this.animal.set(result);
        //     }
        // });
    }

    openDialog2() {
        const dialogRef = this.dialog.open(UploadProgramComponent);
    }
}

