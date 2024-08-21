import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [
        FormsModule, 
        CommonModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})
export class SelectComponent implements ControlValueAccessor {

    @Input() title = '';
    @Input() selectClass = '';
    @Input() type = 'normal';
    @Input() options: any = [];
    @Input() placeholder: string = 'Select';
    @Input() disabled: boolean = false;

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isDropdownOpen = false;
        }
    }

    value: string = '';
    selectedOptions: any[] = [];
    isDropdownOpen: boolean = false;

    onChange: (value: any) => void = () => { };
    onTouched: () => void = () => { };

    constructor(private elementRef: ElementRef) { }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    getSelectedItems(): string {
        return this.selectedOptions.map(opt => opt.label).join(', ') || 'Select options';
    }

    isSelected(option: any): boolean {
        return this.selectedOptions.some(opt => opt.value === option.value);
    }

    onCheckboxChange(option: any, event: Event) {
        const checked = (event.target as HTMLInputElement).checked;
        if (checked) {
            this.selectedOptions = [...this.selectedOptions, option];
        } else {
            this.selectedOptions = this.selectedOptions.filter(opt => opt.value !== option.value);
        }
        this.onChange(this.selectedOptions.map(opt => opt.value));
    }


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
