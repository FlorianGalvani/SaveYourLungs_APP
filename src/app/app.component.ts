import { Component } from '@angular/core';
import { Health } from '@awesome-cordova-plugins/health/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private health: Health) {
    this.health.isAvailable()
      .then((available: boolean) => {
        console.log(available);
        this.health.requestAuthorization([
          'distance', 'nutrition',  //read and write permissions
          {
            read: ['steps'],       //read only permission
            write: ['height', 'weight']  //write only permission
          }
        ])
          .then(res => console.log(res))
          .catch(e => console.error(e));
      })
      .catch(e => console.error(e));
  }
}
