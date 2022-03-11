import { Component, OnInit } from '@angular/core';
import { ObjectifsService } from 'src/app/services/api/objectifs/objectifs.service';
import { Storage } from '@ionic/storage-angular';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.page.html',
  styleUrls: ['./objectif.page.scss'],
})

export class ObjectifPage implements OnInit {
  token;
  challenges = [];
  todaySteps = 1500;
  isLoadingChallenges = false;
  constructor(private push: Push, private health: Health, private objectfisService: ObjectifsService, private storage: Storage) { }

  async ngOnInit() {

    this.isLoadingChallenges = true;
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    this.health.query({
      startDate: start,
      endDate: end,
      dataType: 'steps',
      limit: 1000,

    }).then((data) => {
      if (data) {
        data.forEach((steps) => {
          this.todaySteps += parseInt(steps.value, 10);
        });

      }
    }).catch(e => console.error(e));

    await this.storage.get('ACCESS_TOKEN').then((data) => {
      this.token = data;
      this.objectfisService.getChallenges(data).subscribe((res) => {
        this.challenges = this.challenges.concat(res);
        this.isLoadingChallenges = false;

      });
    });

  }

  randomObjectif() {
    this.objectfisService.createRandomChallenge(this.token).subscribe(() => {
      this.objectfisService.getChallenges(this.token).subscribe((res) => {
        this.challenges = [];
        this.challenges = this.challenges.concat(res);
      });
    });
  }
  surrendObjectif(id) {
    this.objectfisService.surrendObjectif(this.token,id).subscribe(() => {
      this.objectfisService.getChallenges(this.token).subscribe((res) => {
        this.challenges = [];
        this.challenges = this.challenges.concat(res);
      });
    });
  }
}
