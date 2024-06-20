import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../service/cv-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] =[];
  selectedCv: Cv | null = null;
  loggerService = inject(LoggerService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);
  constructor(public sayHelloService: SayHelloService) {
    this.loggerService.logger('bienvenu dans le cvComponent');
    this.sayHelloService.hello();
    this.toastr.info('je suis le cvComponent')
    this.cvs = this.cvService.getCvs();
  }

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
