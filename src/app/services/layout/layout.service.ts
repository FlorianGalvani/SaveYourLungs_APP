import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private errorPopupMessage = new Subject<any>();
  private notificationModal = new Subject<any>();

  constructor() { }
  sendErrorPopup(type: string, message: string) {
    const data = {
      type,
      message
    };
    this.errorPopupMessage.next(data);
  }

  getErrorPopup(): Observable<any> {
    return this.errorPopupMessage.asObservable();
  }

  sendOpenModalSignal(componentName: string) {
    if (componentName) {
      this.notificationModal.next(componentName);
    }
  }

  getOpenModalSignal(): Observable<any> {
    return this.notificationModal.asObservable();
  }
}
