import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private layoutService: LayoutService) {}

  openNotificationsModal() {
    this.layoutService.sendOpenModalSignal('notifications');
  }

  ngOnInit() { }

}
