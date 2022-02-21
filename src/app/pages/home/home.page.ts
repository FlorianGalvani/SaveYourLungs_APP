import { Component } from '@angular/core';
interface Notification {
  title:string;
  content:string;
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
]
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notifications: Array<Notification> = notifications;
  constructor() {}

}
