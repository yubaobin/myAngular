/**
 *  属性型指令
 * */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({selector: '[appHighlight]'})
export class HighlightDirective {

  @Input('appHighlight') color:string = '#fff';
  @Input() defaultColor:string = '';
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnChanges(changes) {
    this.changeColor(changes.color.currentValue || '#fff')
  }
  @HostListener('mouseenter') onmouseenter() {
    this.changeColor('#222');
    console.log(this.defaultColor);
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.changeColor('#ff23ba');
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  private changeColor(color:string) {
    this.el.nativeElement.style.color = color;
  }
}
