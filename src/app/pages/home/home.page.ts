import { Component } from '@angular/core';
import { Health } from '@awesome-cordova-plugins/health/ngx';

interface Notification {
  title: string;
  content: string;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private health: Health) {
    console.log('date : ', new Date().getTime() - 1 * 24 * 60 * 60 * 1000);

    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    this.health.query({
      startDate: start, // three days ago
      endDate: end, // now
      dataType: 'steps',
      limit: 1000,

    }).then((data) => {
      console.log('data : ', data);
    }).catch(e => console.error(e));
  }
}
