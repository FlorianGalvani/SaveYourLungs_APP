import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = environment.apiUrl + 'user/';
  constructor(private http: HttpClient) { }

  getUserInfos() {
    return this.http.get(this.url + 'profile');
  }
}
