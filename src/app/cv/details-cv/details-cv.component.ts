import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../service/cv-service.service';
import { APP_ROUTES } from 'src/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  ngOnInit() {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.getCvById(+id);
    if (!this.cv) this.router.navigate([APP_ROUTES.cv]);
  }
  delete() {
    if (this.cv) {
      if(this.cvService.deleteCv(this.cv)) {
        this.toastr.success(`Le cv a été supprimé avec succès`);
        this.router.navigate([APP_ROUTES.cv]);
      }
    }
  }
}
