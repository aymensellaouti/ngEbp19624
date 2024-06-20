import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  loggerService = inject(LoggerService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor(public sayHelloService: SayHelloService) {
    this.loggerService.logger('bienvenu dans le cvComponent');
    this.sayHelloService.hello();
    this.toastr.info('je suis le cvComponent')
  }
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
    new Cv(2, 'sellaouti', 'skan', 'dev', '    ', '12345', 12),
  ];
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
