import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = environment.apiUrl + 'user/';

  constructor(private http: HttpClient, private storage: Storage) {}


  getUserInfos(token) {
    console.log('token : ', token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.url + 'profile', { headers});
  }

}
