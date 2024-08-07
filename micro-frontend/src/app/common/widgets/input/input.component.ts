import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export interface IDInput {
    id: string | number,
    value: string | number
}

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor {

    @Input() type = 'simpleInput';
    @Input() title = '';
    @Input() placeholder = '';
    @Input() idPlaceholder = '';
    @Input() extraClass = '';
    @Output() helpButton = new EventEmitter();

    value!: any;
    onChange: (value: any) => void = () => { };
    onTouched: () => void = () => { };

    idValueForm: FormGroup;
    mobileNumberForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.idValueForm = fb.group({
            id: [''],
            value: ['']
        })

        this.mobileNumberForm = fb.group({
            id: ['+91'],
            value: ['']
        })
    }

    // Called when input value changes
    onModelChange(value: any) {
        if (this.type === 'simpleInput') {
            this.value = value;
        } else if (this.type === 'IDInput') {
            this.idValueForm.setValue(value);
        } else {
            this.mobileNumberForm.setValue(value);
        }
        this.onChange(value);
        this.onTouched();
    }

    // Write a new value to the element
    writeValue(value: any): void {
        if (this.type === 'simpleInput') {
            this.value = value;
        } else if (this.type === 'IDInput') {
            this.idValueForm.setValue(value);
        } else {
            this.mobileNumberForm.setValue(value);
        }
    }

    // Set the function to be called when the control receives a change event
    registerOnChange(fn: any): void {
        if (this.type === 'simpleInput') {
            this.onChange = fn;
        } else if (this.type === 'IDInput') {
            this.idValueForm.valueChanges.subscribe(fn);
        } else {
            this.mobileNumberForm.valueChanges.subscribe(fn);
        }
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
