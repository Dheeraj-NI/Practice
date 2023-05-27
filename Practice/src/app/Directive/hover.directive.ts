import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer :Renderer2) {}
  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') onMouseHover() {
    this.renderer.setStyle(this.element.nativeElement,'margin','5px 10px')
    this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px')
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.element.nativeElement,'margin','0px 0px')
    this.renderer.setStyle(this.element.nativeElement,'padding','0px 0px')
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')
  }
}
