import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

//Custom Modules
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './modules/auth/auth.module';
//Components
import { AppComponent } from './app.component';

import { Health } from '@awesome-cordova-plugins/health/ngx';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { NgChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';

const declarations = [AppComponent];

@NgModule({
  declarations,
  entryComponents: [],
  imports: [
    CommonModule,
    LayoutModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    IonicStorageModule.forRoot(),
    NgChartsModule
  ],
  providers: [Push,NativeAudio,Health,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
