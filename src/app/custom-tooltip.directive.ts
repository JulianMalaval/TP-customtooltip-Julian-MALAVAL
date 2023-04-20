import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {

  constructor(private el : ElementRef, private renderer : Renderer2) {
  }


  @HostListener('mouseenter') onMouseEnter() {
    const tooltip = this.el.nativeElement.querySelector('.custom-tooltip');
    const content = this.el.nativeElement.innerHTML;
    tooltip.innerHTML = content;
  }

  @HostListener('mouseleave') onMouseLeave() {
    const tooltip = this.el.nativeElement.querySelector('.custom-tooltip');
    tooltip.innerHTML = '';
  }









}
