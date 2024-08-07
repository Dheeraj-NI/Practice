import { CommonModule, DatePipe } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-date',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './date.component.html',
    styleUrl: './date.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateComponent),
            multi: true
        }
    ]
})

export class DateComponent implements ControlValueAccessor {

    @Input() title = '';
    today = new Date().toISOString().split('T')[0];

    value: string = '';
    onChange: (value: any) => void = () => { };
    onTouched: () => void = () => { };

    // Called when input value changes
    onModelChange(value: any) {
        this.value = value;
        this.onChange(value);
        this.onTouched();
    }

    // Write a new value to the element
    writeValue(value: any): void {
        this.value = value;
    }

    // Set the function to be called when the control receives a change event
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // Set the function to be called when the control receives a touch event
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // Enable or disable the element
    setDisabledState?(isDisabled: boolean): void {
        // Handle the component's disabled state
    }

}
