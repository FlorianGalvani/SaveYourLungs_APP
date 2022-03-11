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
    private router: Router,
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
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    // PushNotifications.requestPermissions().then(result => {
    //   console.log('===========================================');
    //   console.log('permissions : ', result);
    //   console.log('===========================================');
    //   if (result.receive === 'granted') {
    //     // Register with Apple / Google to receive push via APNS/FCM
    //     PushNotifications.register();
    //   } else {
    //     // Show some error
    //   }
    // });

    // // On success, we should be able to receive notifications
    // PushNotifications.addListener('registration',
    //   (token: Token) => {
    //     alert('Push registration success, token: ' + token.value);
    //   }
    // );

    // // Some issue with our setup and push will not work
    // PushNotifications.addListener('registrationError',
    //   (error: any) => {
    //     alert('Error on registration: ' + JSON.stringify(error));
    //   }
    // );

    // // Show us the notification payload if the app is open on our device
    // PushNotifications.addListener('pushNotificationReceived',
    //   (notification: PushNotificationSchema) => {
    //     alert('Push received: ' + JSON.stringify(notification));
    //   }
    // );

    // // Method called when tapping on a notification
    // PushNotifications.addListener('pushNotificationActionPerformed',
    //   (notification: ActionPerformed) => {
    //     alert('Push action performed: ' + JSON.stringify(notification));
    //   }
    // );
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
        }, (err) => {
          this.authService.logout();
          // this.isLoggedIn = false;
          this.router.navigate(['/landing-page']);
        });

      }
    });
  }
}
