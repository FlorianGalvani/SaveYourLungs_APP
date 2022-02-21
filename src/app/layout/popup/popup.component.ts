import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})

export class PopupComponent implements OnInit {
  @ViewChild('errorPopup', { read: ElementRef, static: true }) errorPopup: ElementRef;
  clickEventsubscription: Subscription;
  message: string;
  status = 'idle';
  constructor(private layoutService: LayoutService, private animationCtrl: AnimationController) {
    this.clickEventsubscription =
      this.layoutService.getErrorPopup().subscribe((data) => {
        this.message = data.message;
        const el = this.errorPopup.nativeElement;
        switch (data.type) {
          case 'info':
            el.style.background = '#5260ff';
            break;
          case 'error':
            el.style.background = '#eb445a';
            break;
          case 'success':
            el.style.background = '#2fdf75';
            break;
          default:
            break;
        }
        const openpopup = this.animationCtrl
          .create()
          .addElement(this.errorPopup.nativeElement)
          .duration(600)
          .iterations(1)
          .fromTo('transform', 'translateY(-100px)', 'translateY(-0px)')
          .onFinish(() => {
            setTimeout(() => {
              closepopup.play();
            }, 5000);
          });
        const closepopup = this.animationCtrl
          .create()
          .addElement(this.errorPopup.nativeElement)
          .duration(800)
          .iterations(1)
          .fromTo('transform', 'translateY(0px)', 'translateY(-100px)')
          .onFinish(() => {
            this.status = 'idle';
          });
        if (this.status === 'idle') {
          this.status = 'working';
          openpopup.play();
        }
      });
  }

  ngOnInit() { }

}
