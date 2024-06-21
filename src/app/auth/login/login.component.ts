import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(form: NgForm) {
    this.authService.login(form.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.id);
        this.router.navigate([APP_ROUTES.cv]);
        this.toastr.success('Bienvenu dans la cvTech');
      },
      error: (e) => this.toastr.error('Veuillez vérifier vos credentials'),
    });
  }
}
