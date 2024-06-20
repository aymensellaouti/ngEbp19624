import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../service/embauche-service.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent {
  embauchees: Cv[] = [];
  embaucheService =inject(EmbaucheService);
  constructor() {
    this.embauchees = this.embaucheService.getEmbauchees();
  }
}
