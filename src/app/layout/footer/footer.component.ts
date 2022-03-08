import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/layout/layout.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentPage = '';
  constructor(private router: Router, private layoutService: LayoutService){
    this.currentPage = window.location.pathname;
  }
  
  navigate(page){
    // this.layoutService.sendErrorPopup('success','Ceci est une erreur');
    console.log('===========================================');
    console.log(page);
    console.log('===========================================');
    this.currentPage = page;
    this.router.navigate([page]);
  }
  
  openNotificationsModal() {
    this.layoutService.sendOpenModalSignal('notifications');
  }

  ngOnInit() {}

}
