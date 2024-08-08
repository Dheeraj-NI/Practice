import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-title-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './title-header.component.html',
    styleUrl: './title-header.component.scss'
})
export class TitleHeaderComponent {

    @Input() title = '';
    @Input() title2 = '';
    @Input() previousScreenUrl = '';
    @Input() nextScreenUrl = '';
    @Input() isShowNextButton = false;
    @Input() isShowPreviousButton = false;
    @Input() isShowImportButton = false;
    @Input() isShowNewServiceButton = false;
    @Input() isShowExportButton = false;
    @Input() isShowPrintButton = false;
    @Input() isShowSaveButton = false;
    @Input() isShowCreateButton = false;
    @Input() isShowClearDataButton = false;

    constructor(private router: Router) {}

    navigate(url: string) {
        this.router.navigate([url]);
    }

    back() {
        window.history.back();
    }
}
