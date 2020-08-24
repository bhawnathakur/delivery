import { Injectable } from '@angular/core';

import { Observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
user :any;
isdriverlist =false;
userid: any ;
setOrderPageIndex =0;
setDeliveredPageIndex =0;
setUnDeliveredPageIndex =0;
comingFromdDelivered = false;
comingFromdUnDelivered=false ;
//url="http://localhost/api/";
url="https://drivhussenter.eu/api/";
driverId: string ;
orderArray: any;
private subject = new Subject<any>()
subscription = new Subject();
executeAction() {
    this.subscription.next();
}

onDelivered: boolean;
imgName="";
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}
