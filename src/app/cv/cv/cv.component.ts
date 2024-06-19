import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'dev',
      'rotating_card_profile3.png',
      '1234',
      41
    ),
    new Cv(
      2,
      'sellaouti',
      'skan',
      'dev',
      'rotating_card_profile2.png',
      '12345',
      12
    ),
  ];
}
