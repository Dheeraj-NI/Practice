import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InputComponent } from '../../common/widgets/input/input.component';
import { ButtonComponent } from '../../common/widgets/button/button.component';
import { FileComponent } from '../../common/widgets/file/file.component';
import { TextareaComponent } from '../../common/widgets/textarea/textarea.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    FileComponent,
    TextareaComponent,
    CommonModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  status: number = 1;
  stars = [1, 2, 3, 4, 5];
  selected: number = 0;
  filled: number = 3;
  constructor(public dialogRef: MatDialogRef<FeedbackComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
  selectRating(index: number) {
    this.selected = index + 1;
  }
}
