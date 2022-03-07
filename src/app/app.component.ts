import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './services/api/auth/auth.service';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { HeaderColor } from '@awesome-cordova-plugins/header-color/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private health: Health,
    private storage: Storage,
    private authService: AuthService,
    private router: Router
    ) {
    this.health.isAvailable()
      .then((available: boolean) => {
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
  async ngOnInit() {
    // If using a custom driver:
    await this.storage.create();
    this.authService.isLoggedIn().subscribe((res) => {
      this.isLoggedIn = res;
    });
    await this.storage.get('ACCESS_TOKEN').then((data) => {
      if (!data) {
        this.router.navigate(['/landing-page']);
      } else {
        this.authService.checkTokenValidity(data).subscribe((res) => {
          console.log(res);
          this.isLoggedIn = true;
        },(err) => {
          this.authService.logout();
          this.isLoggedIn = false;
          this.router.navigate(['/landing-page']);
        });

      }
    });
  }
}
