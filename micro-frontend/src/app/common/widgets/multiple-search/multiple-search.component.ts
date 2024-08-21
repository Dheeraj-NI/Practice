import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-multiple-search',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './multiple-search.component.html',
    styleUrl: './multiple-search.component.scss'
})
export class MultipleSearchComponent {

    @Input() title = '';
    @Input() extraClass = '';
    @Input() placeholder = '';

    value = '';
    searchList: string[] = [];
    searchValue = '';

    search() {
        this.searchList.push(this.searchValue);
        this.searchValue = '';
    }

    deleteSearch(index: number) {
        this.searchList.splice(index, 1);
    }
}
