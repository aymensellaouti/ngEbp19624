import { Component, Input, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../service/embauche-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    if (this.cv){
      if (!this.embaucheService.embaucher(this.cv)) {
        this.toastr.warning(`${this.cv.name} est déjà pré selectionné`);
     }
  }
  }
}
