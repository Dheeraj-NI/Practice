import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InputComponent } from '../../widgets/input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../widgets/button/button.component';

@Component({
  selector: 'app-barcode-scan',
  standalone: true,
  imports: [InputComponent,CommonModule,FormsModule,ButtonComponent],
  templateUrl: './barcode-scan.component.html',
  styleUrl: './barcode-scan.component.scss'
})
export class BarcodeScanComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<BarcodeScanComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.title = this.data.title;
  }
  barcodeData: any = '';
  title: string = '';
  closeDialog(data: boolean) {
    if (data) {
      
      this.dialogRef.close(this.barcodeData);
    } else {
      this.dialogRef.close();
      
    }
}

}
