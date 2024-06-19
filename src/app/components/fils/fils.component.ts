import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  @Input({
    alias: 'message',
    required: true,
    // transform: (value: string) => {}
  })
  messageDePapa = 'il m a encore rien envoyé';
  // Je créer mon event
  @Output()
  sendDataToDad = new EventEmitter<string>();

  sendMessage() {
    this.sendDataToDad.emit('cc papa');
  }
}
