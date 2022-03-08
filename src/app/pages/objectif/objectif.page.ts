import { Component, OnInit } from '@angular/core';
import { ObjectifsService } from 'src/app/services/api/objectifs/objectifs.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.page.html',
  styleUrls: ['./objectif.page.scss'],
})
export class ObjectifPage implements OnInit {
  token;
  challenges = [];
  constructor(private objectfisService: ObjectifsService, private storage: Storage) { }

  async ngOnInit() {

    await this.storage.get('ACCESS_TOKEN').then((data) => {
      this.token = data;
    });

    this.objectfisService.getChallenges(this.token).subscribe((res ) => {
      console.log('res : ', res);
      this.challenges.concat(res);
    });
  }

  randomObjectif() {
    this.objectfisService.createRandomChallenge(this.token).subscribe((res) => {
      console.log('===========================================');
      console.log(res);
      this.challenges.push(res);
      console.log('===========================================');
    });
  }
}
