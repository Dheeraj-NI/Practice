import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateComponent } from '../date/date.component';

@Component({
    selector: 'app-time',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './time.component.html',
    styleUrl: './time.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimeComponent),
            multi: true
        }
    ]
})
export class TimeComponent implements ControlValueAccessor {


    @Input() title = '';
    value: string = '';
    onChange: (value: any) => void = () => { };
    onTouched: () => void = () => { };

    // Called when input value changes
    onModelChange(value: any) {
        this.value = value;
        this.onChange(value);
        this.onTouched();
    }

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
