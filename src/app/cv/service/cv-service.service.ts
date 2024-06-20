import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
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
}
