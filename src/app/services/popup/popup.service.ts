import {Injectable} from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorPopupService {
  
    private errorPopupMessage = new Subject<any>();

    sendErrorPopup(type: string ,message: string) {
      const data = {
        type: type,
        message: message
      }
      this.errorPopupMessage.next(data);
    }

    getErrorPopup(): Observable<any> {
      return this.errorPopupMessage.asObservable();
    }
}