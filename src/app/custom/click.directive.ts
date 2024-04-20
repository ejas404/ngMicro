import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {

  constructor() { }
  @HostListener('contextmenu',['$event'])
  onClick(e : Event){
    e.preventDefault()
    alert('right clicked')
  }

}

