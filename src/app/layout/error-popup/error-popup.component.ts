import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ErrorPopupService } from 'src/app/services/popup/popup.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss'],
})

export class ErrorPopupComponent implements OnInit {
  @ViewChild("errorPopup", { read: ElementRef, static: true }) errorPopup: ElementRef
  clickEventsubscription: Subscription;
  message: string;
  status: string = 'idle';
  constructor(private errorPopupService: ErrorPopupService, private animationCtrl: AnimationController) {
    this.clickEventsubscription =
      this.errorPopupService.getErrorPopup().subscribe((data) => {
        this.message = data.message
        let el = this.errorPopup.nativeElement
        switch (data.type) {
          case 'info':
            el.style.background = "blue"
            break;
          case 'error':
            el.style.background = "red"
            break;

          default:
            break;
        }
        const openpopup = this.animationCtrl
          .create()
          .addElement(this.errorPopup.nativeElement)
          .duration(800)
          .iterations(1)
          .fromTo("transform", "translateY(-100px)", "translateY(-0px)")
          .onFinish(() => {
            setTimeout(() => {
              closepopup.play()
            }, 5000);
          })
        const closepopup = this.animationCtrl
          .create()
          .addElement(this.errorPopup.nativeElement)
          .duration(800)
          .iterations(1)
          .fromTo("transform", "translateY(0px)", "translateY(-100px)")
          .onFinish(() => {
            this.status = 'idle'
          })
        if (this.status === 'idle') {
          this.status = 'working'
          openpopup.play()
        }
      })
  }

  ngOnInit() { }

}
