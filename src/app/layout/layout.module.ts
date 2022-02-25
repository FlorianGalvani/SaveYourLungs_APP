import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { ModalComponent } from './modals/modals-controler.component';
import  { ModalsModule} from './modals/modals.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PopupComponent, ModalComponent],
  imports: [
    CommonModule, IonicModule, ModalsModule
  ],
  exports: [HeaderComponent, FooterComponent, PopupComponent, ModalComponent]
})
export class LayoutModule { }
