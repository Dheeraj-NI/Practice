import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css'],
})
export class ContentChildComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log(this.Para.nativeElement.textContent);
  }
  ngOnInit(): void {
    console.log(this.Para);
  }

  @ContentChild('para') Para!: ElementRef;
}
