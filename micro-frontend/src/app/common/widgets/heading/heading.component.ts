import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-heading',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './heading.component.html',
    styleUrl: './heading.component.scss'
})
export class HeadingComponent {

    @Input() title = '';
    @Input() type = 'primary';
    @Input() extraClass = '';

}
