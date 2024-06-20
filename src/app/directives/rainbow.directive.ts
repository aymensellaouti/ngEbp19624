import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]'
})
export class RainbowDirective {
  @HostBinding('style.color')
  color = 'black';
  @HostBinding('style.borderColor')
  bc = 'black';

  constructor() {
    console.log("AppRainbow");
   }

  private changeColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  @HostListener('keyup') onKeyUp() {
    this.bc = this.changeColor();
    this.color = this.changeColor();
  }
}
