import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../widgets/button/button.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-upload-program',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './upload-program.component.html',
    styleUrl: './upload-program.component.scss'
})
export class UploadProgramComponent {

    @ViewChild('fileInput') fileInput: any;

    label: string = 'Add File';

    constructor(public dialogRef: MatDialogRef<UploadProgramComponent>) {}

    closeDialog() {
        this.dialogRef.close();
    }

    selectFile() {
        this.fileInput.nativeElement.click();
    }

    fileHandle(event: any) {
        this.label = event.target.files[0].name;
    }
}
