import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchBarComponent),
            multi: true
        }
    ]
})
export class SearchBarComponent implements ControlValueAccessor {

    @Input() placeholder = 'Search';
    @Input() title = '';
    @Output() helpButton = new EventEmitter();

    value: any = '';
    selectedOptions: any[] = [];
    isDropdownOpen: boolean = false;

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
    showHelp() {
        this.helpButton.emit();
    }

}
