import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorPopupService } from 'src/app/services/popup/popup.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private errorPopupService:ErrorPopupService){}

  navigate(page){
    console.log(page);
    this.errorPopupService.sendErrorPopup('error','Ceci est une erreur');
    this.router.navigate([page])
  }

  ngOnInit() {}

}
