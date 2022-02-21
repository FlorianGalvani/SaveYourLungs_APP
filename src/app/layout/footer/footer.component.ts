import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/services/layout/layout.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private layoutService:LayoutService){}

  navigate(page){
    console.log(page);
    this.layoutService.sendErrorPopup('success','Ceci est une erreur');
    this.router.navigate([page])
  }

  ngOnInit() {}

}
