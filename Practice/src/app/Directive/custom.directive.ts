import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class SetBackground implements OnInit{

  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#c8e6c9';
    
  }

}
