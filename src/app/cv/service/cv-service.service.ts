import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  // Cv1 Cv3 Cv5 Cv1
  private selectCvSubject$ = new Subject<Cv>();
  selectCv$ = this.selectCvSubject$.asObservable();
  private cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'dev',
      'rotating_card_profile3.png',
      '1234',
      41
    ),
    new Cv(2, 'sellaouti', 'skan', 'dev', '    ', '12345', 12),
  ];

  constructor() {}
  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  /**
   * Delete le Cv s'il existe
   *
   * @param cv: Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Permet d'injecter dans le flux des cvs selectionnés un nouveau cv
   * @param cv : Le cv à ajouter au flux
   */
  selectCv(cv: Cv): void {
    this.selectCvSubject$.next(cv);
  }
}
