import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { Health } from '@awesome-cordova-plugins/health/ngx';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

import { HttpClientModule } from '@angular/common/http';
//Modules
const declarations = [AppComponent];

@NgModule({
  declarations,
  entryComponents: [],
  imports: [CommonModule,LayoutModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [NativeAudio,Health,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
