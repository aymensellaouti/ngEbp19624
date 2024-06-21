import { Inject, Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/config/app-api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  http = inject(HttpClient);
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

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv)
  }

  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Observable<Cv> {
     return this.http.get<Cv>(APP_API.cv + id);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  deleteCv(id: number): Observable<any> {
    // const params = new HttpParams().set('access_token', localStorage.getItem('token') ?? '');
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token') ?? '');
    return this.http.delete<Cv>(APP_API.cv + id, { headers });
  }
  /**
   * Delete le Cv s'il existe
   *
   * @param cv: Cv
   * @returns boolean
   */
  deleteFakeCv(cv: Cv): boolean {
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
