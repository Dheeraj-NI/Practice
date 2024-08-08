import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    ForgotPasswordComponent,
    MatRadioModule,
    MatListModule
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  passwordValue: string = '';
  starsDisplay: string = '';
  loginForm!: FormGroup;
  w_100 = 'w-100 mt-2';
  status = 'login';
  loginpassType:string = 'password'
  newpassType: string = 'password';
  renewpassType: string = 'password';
  selectedValue: string = '';

  isSelected(value: string): boolean {
    return this.selectedValue === value;
  }
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog,private router:Router) {}
  ngOnInit(): void {
    this.createForm();
  }
  items = [
    { label: 'Andheri, Mumbai', value: 'option1' },
    { label: 'Dombivali, Navi Mumbai', value: 'option2' },
    { label: 'Indiranagar, Bengaluru', value: 'option3' },
    { label: 'Whitefield, Bengaluru', value: 'option4' },
  ];

  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.status = 'b_confirm';
    console.log(this.loginForm.value);
  }
  onDashboardPage() {
    this.router.navigate(['dashboard']);
  }
  loginPasswordVisibility(): void {
    this.loginpassType =
      this.loginpassType === 'password' ? 'text' : 'password';
  }
  NewPasswordVisibility(): void {
    this.newpassType =
      this.newpassType === 'password' ? 'text' : 'password';
  }
  reNewPasswordVisibility(): void {
    this.renewpassType =
      this.renewpassType === 'password' ? 'text' : 'password';
  }
  openDialog() {
    const openedDialog = this.dialog.open(ForgotPasswordComponent, {
      width: '332px',
      position: {
        right: '234px',
        top: '200px',
      },
      panelClass: 'posi',
      disableClose: true,
    });

    openedDialog.afterClosed().subscribe((res: any) => {
      if (!res) return;      
      this.status = res;
    });
  }


  PassWordReset() {

    this.status= 'login'
  }
}
