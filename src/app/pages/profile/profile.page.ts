import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Platform } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

//Services
import { UserService } from 'src/app/services/api/user/user.service';

interface UserProfileData {
  age: number;
  avatar: string;
  createdAt: string;
  firstname: string;
  gender: string;
  lastname: string;
  updatedAt: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  @ViewChild('profilTitle') someInput: ElementRef;
  n = new NativeAudio();
  animationCtrl = new AnimationController();
  isPlaying = false;
  clickCount = 0;

  userProfileData: UserProfileData;

  constructor(public platform: Platform, private userService: UserService) {
    this.platform.ready().then(() => {
      const onSuccess = () => {
        console.log('Y');
      };
      const onError = (u: any) => {
        console.error('X2' + u);
      };
      this.n.preloadComplex('funky', 'assets/funky.mp3', 0.5, 1, 0).then(onSuccess, onError);
      //alert("platform ready");
    });
  }

  public playAudio() {
    setTimeout(() => {
      this.clickCount = 0;
      this.isPlaying = false;
    }, 49000);
    this.n.play('funky');
  }

  public handleClick() {
    if (!this.isPlaying) {
      if (this.clickCount > 8) {
        this.isPlaying = true;
        this.playAudio();
      } else {
        this.clickCount += 1;
      }
    }
  }

  ngOnInit() {
    this.userService.getUserInfos().subscribe(async (res: any) => {
      console.log(res);
      this.userProfileData = res;
    })
  }

  ngOnDestroy() {
    this.n.unload('funky');
  }
}
