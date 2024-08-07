import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-time',
    standalone: true,
    imports: [],
    templateUrl: './time.component.html',
    styleUrl: './time.component.scss'
})
export class TimeComponent {

    @Input() title = '';

}
