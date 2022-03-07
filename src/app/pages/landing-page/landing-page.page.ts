import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  subscription;
  
  constructor(private platform: Platform) {

  }

  ngOnInit() {
    console.log('hi');
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
  }
  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }
}
