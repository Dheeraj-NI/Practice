import { Directive, ElementRef, HostBinding ,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor(private element: ElementRef,private renderer :Renderer2) { }



  @HostBinding('style.backgroundColor') background: string = 'transparent'
  
  @HostListener('mouseenter') onMouseHover() {
   this.background ='yellow'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.background= 'transparent';
  }
}

