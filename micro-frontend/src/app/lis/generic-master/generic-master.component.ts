import { Component, OnInit, ViewChild } from '@angular/core';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { InputComponent } from "../../common/widgets/input/input.component";
import { RadioComponent } from "../../common/widgets/radio/radio.component";
import { ButtonComponent } from "../../common/widgets/button/button.component";
import { MatTable, MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BadgesComponent } from "../../common/widgets/badges/badges.component";
import { CommonModule } from '@angular/common';

export interface GenericMaster {
    code: string,
    codeDescription: string,
    sortOrder: string,
    status: string,
    isNew?: boolean,
    isEdit?: boolean
}

@Component({
    selector: 'app-generic-master',
    standalone: true,
    imports: [TopHeaderComponent, NavigationHeaderComponent, TitleHeaderComponent, InputComponent, RadioComponent, ButtonComponent, MatTableModule, FormsModule, BadgesComponent, ReactiveFormsModule, CommonModule],
    templateUrl: './generic-master.component.html',
    styleUrl: './generic-master.component.scss'
})
export class GenericMasterComponent implements OnInit {

    @ViewChild('table1') table!:MatTable<any>;
    @ViewChild('table2') table2!:MatTable<any>;

    displayColumns = ['code', 'codeDescription', 'sortOrder', 'status', 'delete'];
    displayFooterColumns = ['code', 'codeDescription', 'sortOrder', 'status', 'delete'];
    genericMasterData: GenericMaster[] = [
        { code: '1', codeDescription: 'Microbiology Report', sortOrder: '4', status: 'active' },
        { code: '2', codeDescription: 'Microbiology Report', sortOrder: '4', status: 'inactive' },
        { code: '3', codeDescription: 'Microbiology Report', sortOrder: '4', status: 'active' },
        { code: '4', codeDescription: 'Microbiology Report', sortOrder: '4', status: 'inactive' }
    ];
    genericMaster!: FormGroup;

    constructor(private fb: FormBuilder) {
        
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.genericMaster = this.fb.group({
            code: ['', Validators.required],
            codeDescription: ['', Validators.required],
            order: ['', Validators.required],
            status: 'active'
        });
    }

    addData() {
        console.log(this.genericMaster.value);
        if (this.genericMaster.valid) {
            this.genericMasterData.push({
                code: this.genericMaster.value.code,
                codeDescription: this.genericMaster.value.codeDescription,
                sortOrder: this.genericMaster.value.order,
                status: this.genericMaster.value.status,
                isNew: true
            });
            this.table.renderRows();
            this.table2.renderRows();
            this.genericMaster.patchValue({
                code: '',
                codeDescription: '',
                order: '',
                status: 'active'
            });
        }
    }

    deleteRow(index: number) {
        this.genericMasterData.splice(index, 1);    
        this.table.renderRows();
        this.table2.renderRows();
    }

    editRow(element: GenericMaster) {
        element.isEdit = true;
    }

    saveRow(element: GenericMaster) {
        element.isEdit = false;
    }
}
