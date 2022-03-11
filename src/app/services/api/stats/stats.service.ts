import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class StatsService {
  private url = environment.apiUrl + 'stats/cigarettes/';
  // http://192.168.0.171:8000/api/stats/cigarettes/stats
  constructor(private http: HttpClient, private storage: Storage) {}

  getcigarettesInfos(token) {
    console.log('token : ', token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.url + 'stats', { headers});
  }
  
  
}
