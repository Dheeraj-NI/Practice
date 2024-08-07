import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-textarea',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './textarea.component.html',
    styleUrl: './textarea.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true
        }
    ]
})

export class TextareaComponent implements ControlValueAccessor {

    @Input() title: string = '';
    @Input() placeholder: string = '';

    value!: any;
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
