import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from '../../common/widgets/input/input.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ButtonComponent,ReactiveFormsModule,FormsModule,InputComponent,CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  fontSize = 'fs-0.813'
  emailForm!: FormGroup;
  status = 'f-email'
  private timer: any;
  countdown: number = 60;
  w_otp: boolean = false;
  r_otp: boolean = false;
  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.createForm();
    this.startCountdown();
  }
  otpLength = 4; 
  otpValues: string[] = [];
  otpControls: number[] = Array.from({ length: this.otpLength }, (_, i) => i);
  onInput(event: any, index: number): void {    
    const value = event.target.value;
    
    if (value.length === 1) {
    
      if (index < this.otpLength - 1) {
        (event.target.nextElementSibling as HTMLElement)?.focus();
      }
    }

    if (value.length === 1 && this.otpValues.length > 3) {
      
      setTimeout(() => {
        this.dialogRef.close('reset_password');
      }, 5000);
      
    }
  }

  onKeyup(event: KeyboardEvent, index: number): void {
    
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace') {
    
      if (index > 0) {        
        const prevInput = (input.previousElementSibling as HTMLElement) as HTMLInputElement;
        if (prevInput) {
          prevInput.focus();
          prevInput.value = '';
          this.otpValues.splice(index - 1,1);
        }
      }
    }
  }

  
  onFocus(index: number): void {    
    setTimeout(() => {
      (document.querySelector(`input[name='otp${index}']`) as HTMLInputElement)?.select();
    }, 0);
  }

  createForm() {
    this.emailForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      
    });
  }
  backPage() {
    this.status ='f-email'
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log(this.emailForm.value);
    this.status='f-otp'
    
  }
  resendOTP() {
    //resend api call
  }
  startCountdown() {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
        console.log(this.countdown);
      } else {
        // this.dialogRef.close('reset_password');
        clearInterval(this.timer);
        
      }
    }, 1000); 
  }
  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
