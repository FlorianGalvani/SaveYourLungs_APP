import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
interface Notification {
  title: string;
  content: string;
}

const notifications = [
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
  {title: 'test',content: 'contenu'},
];
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notifications: Array<any> = notifications;
  constructor(private modalController: ModalController) { }
  closeNotificationsModal() {
    this.modalController.dismiss();
  }
  ngOnInit() { }

}
