import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ObjectifsService{
  private apiAuthUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getChallenges(token) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiAuthUrl + 'challenges', { headers });
  }

  createRandomChallenge(token) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiAuthUrl + 'challenges/newrandom', { headers });
  }

  surrendObjectif(token,id) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiAuthUrl + 'challenges/surrend', { headers ,params: {id}});
  }


}
