import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  /**
   * Variable representant la couleur par défaut
   */
  private defaultColor = 'red';

  /**
   * Variable representant la couleur de la background
   */
  backgroundColor = this.defaultColor;



  /**
   * Change le background de la Div
   * @param color : c'est la couleur que prendra le backgournd
   */
  changeColor(colorInput: HTMLInputElement) {
    this.backgroundColor = colorInput.value;
    colorInput.value = '';
  }

  /**
   * Remet la valeur par défaut de la couleur du background
   */
  reset() {
    this.backgroundColor = this.defaultColor;
  }
}
