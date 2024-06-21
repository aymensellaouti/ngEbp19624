import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  monObservable: Observable<number>;

  toastr = inject(ToastrService)
  constructor() {
    // 5 4 3 2 1
    this.monObservable = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // Je m'inscris à ce flux et je veux que pour cahque valeur recu je la logue
    this.monObservable.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // setTimeout(
    //   () => {
            this.monObservable
              .pipe(
                map((valeur) => valeur * 3),
                // 15 12 9 6 3
                filter((valeur) => !(valeur % 2))
                //  12 6
              )
              //  12 6
              .subscribe({
                next: (val) => {
                  this.toastr.info('' + val);
                },
                complete: () => {
                  this.toastr.warning('C est fini !!!!');
                },
              });
      // } ,  3000
    // )

  }
}
