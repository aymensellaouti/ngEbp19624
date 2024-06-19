import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  color: string = 'red';

  isHidden = true;

  message = '';
  constructor() {
    // setTimeout(() => {
    //   this.color = 'yellow';
    // }, 1500)
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newValue: string) {
    this.message = newValue;
  }
}
