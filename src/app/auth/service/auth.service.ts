import { Injectable, inject } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginApiResponse } from '../dto/login-api-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/config/app-api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  login(credentials: CredentialsDto): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(APP_API.login, credentials);
  }

}
