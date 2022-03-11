import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage-angular';
import { User } from  'src/app/interfaces/auth/user';
import { AuthResponse } from  'src/app/interfaces/auth/auth-response';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject(false);
  private apiAuthUrl: string = environment.apiUrl;
  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.apiAuthUrl + 'user/signup',user).pipe(
      tap(async (res:AuthResponse) => {
        console.log(res);
        if (res.token) {
          await this.storage.set('ACCESS_TOKEN', res.token);
          this.authSubject.next(true);
        }
      })
    );
  }
  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(this.apiAuthUrl + 'login', user).pipe(
      tap(async (res: AuthResponse) => {
        if (res.token) {
          await this.storage.set('ACCESS_TOKEN', res.token);
          this.authSubject.next(true);
        }
      })
    );
  }
  async logout() {
    await this.storage.remove('ACCESS_TOKEN');
    this.authSubject.next(false);
  }
  isLoggedIn() {
    return this.authSubject.asObservable();
  }
  checkTokenValidity(token) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.httpClient.get(this.apiAuthUrl + 'user/checkTokenValidity', {headers});
  }
}
