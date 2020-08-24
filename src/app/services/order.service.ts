import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { DatePipe } from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

setDate: Date ;
completionDate : any ;
info: any ;
url:string;
  constructor(
    private service: ConstantsService,
    private datePipe: DatePipe,
    private httpclient: HttpClient

  ) { }
  getOrders() {
    this.url = this.service.url;
    return this.httpclient.get(this.url + 'orders/getOrders.php');
  }
  getAdminUndelivered() {
    this.url = this.service.url;
    return this.httpclient.get(this.url + 'orders/getadminUndelivered.php');
  }
  getAdminDelivered() {
    this.url = this.service.url;
    return this.httpclient.get(this.url + 'orders/getadminDelivered.php');
  }
  addOrder(info) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/addOrder.php', info);
  }
  getOneOrder(id) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/getSingleOrder.php', {
      id: id,
    });
  }
  updateOrder(info) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/updateOrder.php', info);
  }

  updateDeliveredOrder(id) {
    this.setDate = new Date();
    this.completionDate = this.datePipe.transform(
      this.setDate,
      "dd-MM-yyyy, h:mm:ss a"
    );

    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/updatedeliveredOrder.php', {
      id: id,

      datetime : this.completionDate
    });
  }
  getCheckedOrders() {
    this.url = this.service.url;
    return this.httpclient.get(this.url + 'orders/getCheckedOrders.php');
  }
  deleteOrder(id) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/deleteOrder.php', {
      id: id
    });
  }
  checkedOrder(id) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/checkedOrder.php', {
      id: id
    });
  }
  uncheckedOrder(id) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/uncheckedOrder.php', {
      id: id
    });
  }
  getUserOrders(id){
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/undeliveredOrder.php', {
      id: id,
    });
  }
  undeliveredOrders(id){
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/undeliveredOrder.php', {
      id: id,
    });
  }
  deliveredOrders(id){
    console.log(id) ;
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/deliveredOrder.php', {
      id: id,
    });
  }
  addcomments(info) {
    console.log(info) ;
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/addcomments.php', info);
  }
  updateOrderPriority(info) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'orders/updateOrderPriority.php', info);
  }
}
