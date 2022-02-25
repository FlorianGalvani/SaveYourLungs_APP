import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationComponent } from './notification/notification.component';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-modal',
  templateUrl: './modals-controler.component.html',
  styleUrls: ['./modals-controler.component.scss'],
})
export class ModalComponent implements OnInit {
  isOpen = false;
  clickEventsubscription: Subscription;
  modal;
  constructor(public modalController: ModalController, private layoutService: LayoutService) {
    this.clickEventsubscription =
      this.layoutService.getOpenModalSignal().subscribe((component) => {
        this.presentModal(component);
      });
  }

  async presentModal(componentName: string) {
    let component: any;
    let cssClass: string;
    this.isOpen = false;
    switch (componentName) {
      case 'notifications':
        component = NotificationComponent;
        cssClass = 'notificationModal';
        break;
      default:
        break;
    }
    if (component) {
      this.modal = await this.modalController.create({
        component,
        cssClass,
        swipeToClose: true,

      });
      return await this.modal.present();
    }
  }

  ngOnInit(): void {
    // this.presentModal('notifications')
  }
}
