import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Animation, AnimationController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
//Services
import { UserService } from 'src/app/services/api/user/user.service';
import { AuthService } from 'src/app/services/api/auth/auth.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

//Interfaces
import { User } from 'src/app/interfaces/auth/user';


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
  token;
  userProfileData: User;

  constructor(
    private userService: UserService,
    private storage: Storage,
    private authService: AuthService,
    private layoutService: LayoutService,
    private router: Router
  ) {
    const onSuccess = () => {
      console.log('Y');
    };
    const onError = (u: any) => {
      console.error('error' + u);
    };
    this.n.preloadComplex('funky', 'assets/funky.mp3', 0.5, 1, 0).then(onSuccess, onError);
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
  logout() {
    this.authService.logout();
    this.router.navigate(['/landing-page']);
  }
  settings() {
    this.layoutService.sendOpenModalSignal('settings');
  }
  async ngOnInit() {
   
    await this.storage.get('ACCESS_TOKEN').then((data) => {
      this.token = data;
    });
    this.userService.getUserInfos(this.token).subscribe( (res: any) => {
      this.userProfileData = res;
    });
  }

  ngOnDestroy() {
    this.n.unload('funky');
  }
}
