import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Directives';
  @ViewChild('dob') datofBirth?: ElementRef;
  @ViewChild('age') Age!: ElementRef;


  destroy = true;
  inputTExt: string = '';
  OnSubmit(inputEl: HTMLInputElement) {

    this.inputTExt = inputEl.value;
  }
  calculateAge() {
    let birthYear = new Date(
      this.datofBirth?.nativeElement.value
    ).getFullYear();
    console.log(this.datofBirth?.nativeElement.value);
  }

  DestroyComponent() {
    this.destroy = false;
  }
}
