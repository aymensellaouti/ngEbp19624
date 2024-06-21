import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../service/cv-service.service';
import { EMPTY, Observable, catchError, of, retry } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      count: 4,
      delay: 2000
    }),
    catchError(e => {
        this.toastr.error(`Veuillez contacter l'admin les datas sont fake :(`)
        return of(this.cvService.getFakeCvs())
      })
  );
  selectedCv$: Observable <Cv>;
  loggerService = inject(LoggerService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor(public sayHelloService: SayHelloService) {
    this.loggerService.logger('bienvenu dans le cvComponent');
    this.sayHelloService.hello();
    this.toastr.info('je suis le cvComponent')
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => this.cvs = cvs,
    //   error: (e) => {
    //     this.toastr.error(`Veuillez contacter l'admin les datas sont fake :(`)
    //     this.cvs = this.cvService.getFakeCvs()
    //   }
    // });
    // this.cvService.selectCv$.subscribe({
    //   next: (cv) => (this.selectedCv = cv),
    // });
    this.selectedCv$ = this.cvService.selectCv$.pipe(
      catchError( e => {
        // je fais ce qu'il faut
        return EMPTY;
      })
    )
    ;
  }
}
