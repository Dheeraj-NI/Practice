import { Component } from '@angular/core';
import { SelectComponent } from "../common/widgets/select/select.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { InputComponent } from "../common/widgets/input/input.component";
import { ButtonComponent } from '../common/widgets/button/button.component';
import { MatTableModule } from '@angular/material/table';
import { TopHeaderComponent } from "../common/components/top-header/top-header.component";
import { NavigationHeaderComponent } from '../common/components/navigation-header/navigation-header.component'
import { TitleHeaderComponent } from "../common/components/title-header/title-header.component";
import { FormsModule } from '@angular/forms';
import { RadioComponent } from "../common/widgets/radio/radio.component";
import { CheckboxComponent } from "../common/widgets/checkbox/checkbox.component";

@Component({
    selector: 'app-masters',
    standalone: true,
    imports: [SelectComponent, MatTabsModule, MatAccordion, MatExpansionModule, InputComponent, ButtonComponent, MatTableModule, TopHeaderComponent, NavigationHeaderComponent, TitleHeaderComponent, FormsModule, RadioComponent, CheckboxComponent],
    templateUrl: './masters.component.html',
    styleUrl: './masters.component.scss'
})
export class MastersComponent {

    displayedColumns = ['action', 'srNo', 'moduleName', 'subModuleName', 'access', 'save', 'print', 'sms', 'email', 'export', 'import'];
    hospitalData = [
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false },
        { moduleName: 'Parameters & Masters', subModuleName: 'Antibiotic Panel Master', access: false, save: false, print: false, sms: false, email: false, export: false, import: false }
    ];

    displayedColumnsSensitiveServices = ['action', 'srNo', 'service'];
    sensitiveServiceData = [
        { srNo: 1, service: 'New Born Screening TMS 50+ Basic 6 - Acuity' }
    ];

    options = [
        { value: 'option1', label: 'Branch 1' },
        { value: 'option2', label: 'Branch 2' },
        { value: 'option3', label: 'Branch 3' },
    ];
    selectHospital = '';
    accountStatusRadio = [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Locked', value: 'locked' }
    ];
    systemRulesRadio = [
        { label: 'View', value: 'view' },
        { label: 'Update', value: 'update' }
    ];

    displayedColumnsDepartments = ['action', 'srNo', 'department'];
    departments = [
        { department: 'Bio chemistry', isChecked: false },
        { department: 'Clinical Pathology', isChecked: false },
        { department: 'Cytology', isChecked: false },
        { department: 'Diagnostic Profiles', isChecked: false },
        { department: 'Fluid', isChecked: false },
        { department: 'Haematology', isChecked: false },
        { department: 'Histopathology', isChecked: false },
        { department: 'Microbiology', isChecked: false },
        { department: 'Outsourced Lab Test', isChecked: false },
        { department: 'Serology', isChecked: false },
        { department: 'Immunology', isChecked: false }
    ];

    departmentsAuthorisation = [
        { department: 'Bio chemistry', isChecked: false },
        { department: 'Clinical Pathology', isChecked: false },
        { department: 'Cytology', isChecked: false },
        { department: 'Diagnostic Profiles', isChecked: false },
        { department: 'Fluid', isChecked: false },
        { department: 'Haematology', isChecked: false },
        { department: 'Histopathology', isChecked: false },
        { department: 'Microbiology', isChecked: false },
        { department: 'Outsourced Lab Test', isChecked: false },
        { department: 'Serology', isChecked: false },
        { department: 'Immunology', isChecked: false }
    ];

    displayColumnCodeDecodeType = ['action', 'srNo', 'typeNo', 'typeDescription'];
    codeDecodeTypeData = [
        { typeNo: '849', typeDescription: 'Relationship Codes' }
    ];

    displayColumnSetupRules = ['name', 'description', 'settings1', 'settings2', 'action'];
    setupRules = [
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' },
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' },
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' },
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' },
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' },
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' },
        { name: 'Edit Admission: While Registering nurse...', description: 'Data 1=Y then Male/Female Baby of mot...', settings1: 'Yes', settings2: '10,11,12' }
    ];

    // Module Access Table Start
    checkIfAllSelected(label: string) {
        let selectedLength = this.hospitalData.filter((h: any) => h[label] === true).length;
        if (selectedLength === this.hospitalData.length) {
            return true;
        }

        return false;
    }

    selectCheckbox(label: string, event: any) {
        let checkedValue = event.target.checked;

        this.hospitalData.forEach((h: any) => {
            h[label] = checkedValue;
        });
    }

    checkRow(element: any, event: any) {
        let checkedValue = event.target.checked;

        element.access = checkedValue;
        element.email = checkedValue;
        element.export = checkedValue;
        element.import = checkedValue;
        element.print = checkedValue;
        element.save = checkedValue;
        element.sms = checkedValue;
    }

    checkIfRowIsSelected(element: any) {
        if (element.access && element.email && element.export && element.import && element.print && element.save && element.sms) {
            return true;
        }

        return false;
    }
    // Module Access Table End

    // Department Table Start
    departmentTableChecked(type: string, data: any) {
        let arr: any = [];
        data.forEach((d: any, i: number) => {
            if (type === 'even' && (i % 2 === 0)) {
                arr.push(d);
            }

            if (type === 'odd' && (i % 2 !== 0)) {
                arr.push(d);
            }
        });

        if (arr.length === arr.filter((d: any) => d.isChecked).length) {
            return true;
        }

        return false;
    }

    departmentTableCheckboxChange(type: string, event: any, data: any) {
        let checkedValue = event.target.checked;
        data.forEach((d: any, i: number) => {
            if (type === 'even' && (i % 2 === 0)) {
                d.isChecked = checkedValue;
            }

            if (type === 'odd' && (i % 2 !== 0)) {
                d.isChecked = checkedValue;
            }
        });
    }
    // Department Table End
}
