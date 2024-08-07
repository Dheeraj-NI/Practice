import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-badges',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './badges.component.html',
    styleUrl: './badges.component.scss'
})
export class BadgesComponent {

    @Input() badgeClass: string = '';
    @Input() title: string = '';
    @Input() type: number = 1;
}
