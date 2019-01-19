import { Directive ,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[WholeNumber]'
})
export class WholeNumberDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }
 private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];
 //private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
 private regex: RegExp = new RegExp(/^[0-9,\,]+$/g);
 @HostListener('keydown', [ '$event' ])
 onKeyDown(event: KeyboardEvent) {
 var isedit= this.el.nativeElement.getAttribute("isedit");
 // Allow Backspace, tab, end, and home keys
 if (this.specialKeys.indexOf(event.key) !== -1) {
 return;
 }
 let current: string = this.el.nativeElement.value;
 let next: string = current.concat(event.key);
 if (next && !String(next).match(this.regex)) {
 event.preventDefault();
 }
}
}
