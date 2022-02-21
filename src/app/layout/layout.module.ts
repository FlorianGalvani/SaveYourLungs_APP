import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { ModalComponent } from './modals/modals-controler.component';


@NgModule({
  declarations: [HeaderComponent,FooterComponent,PopupComponent,ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,FooterComponent,PopupComponent,ModalComponent]
})
export class LayoutModule { }
