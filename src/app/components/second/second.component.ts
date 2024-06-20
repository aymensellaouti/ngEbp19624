import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <p>Second</p>
  `,
  styles: [``],
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
  constructor() {
    console.log(this.acr);
  }
}
