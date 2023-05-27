import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  @ViewChild('dob') datofBirth?: ElementRef;
  @ViewChild('age') Age!: ElementRef;


 
  calculateAge() {
    let birthYear = new Date(
      this.datofBirth?.nativeElement.value
    ).getFullYear();
    console.log(this.datofBirth?.nativeElement.value);
  }
}
