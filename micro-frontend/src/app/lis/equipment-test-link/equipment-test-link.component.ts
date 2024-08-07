import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NavigationHeaderComponent } from '../../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../../common/components/top-header/top-header.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { InputComponent } from '../../common/widgets/input/input.component';
import { RadioComponent } from '../../common/widgets/radio/radio.component';

export interface EquipmentTestLink {
  serviceCode: string;
  serviceName: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-equipment-test-link',
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
  ],
  templateUrl: './equipment-test-link.component.html',
  styleUrl: './equipment-test-link.component.scss',
})
export class EquipmentTestLinkComponent {
  @ViewChild('table1') table!: MatTable<any>;
  @ViewChild('table2') table2!: MatTable<any>;
  displayColumns = [
    'action',
    'serviceCode',
    'serviceName',
    'analyzer_code',    
  ];
  EquipmentTestLinkData: EquipmentTestLink[] = [
    { serviceCode: 'AAW', serviceName: 'Anterior Abdominal Wall' , isChecked: false},
    { serviceCode: 'AAW', serviceName: 'Anterior Abdominal Wall' , isChecked: false},
    { serviceCode: 'AMLE', serviceName: 'Amputation Lower Extrimity' , isChecked: false},
    { serviceCode: 'AMLE', serviceName: 'Amputation Lower Extrimity' , isChecked: false},
  ];
  serviceTableChecked(type: string, data: any) {
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
  serviceTableCheckboxChange(type: string, event: any, data: any) {
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
}
