import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface File {
    name: string,
    fileValue: string | ArrayBuffer | null
}

@Component({
    selector: 'app-file',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './file.component.html',
    styleUrl: './file.component.scss'
})
export class FileComponent {

    @ViewChild('fileInput') fileInput: any;
    @Input() title = '';
    @Input() type = '';

    file: File = {
        name: '',
        fileValue: ''
    }

    selectFile() {
        this.fileInput.nativeElement.click();
    }

    fileHandle(event: any) {
        this.file.name = event.target.files[0].name;
        
        let reader = new FileReader();
        let file = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.file.fileValue = reader.result;
                console.log(event.target.files[0].name, this.file.fileValue);
            }
        }

        
    }

    clearPhoto(event: any) {
        event.preventDefault();
        this.file = {
            name: '',
            fileValue: ''
        }
    }

}
