import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appItemHover]'
})
export class ItemHoverDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  @HostListener('mouseout')
  mouseout() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

  @HostListener('mouseover')
  mouseover() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }
}
