import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;
  constructor(
    private service: ConstantsService,
    private httpclient: HttpClient
  ) {}
  getUsers() {
    this.url = this.service.url;
    return this.httpclient.get(this.url + 'users/getUsers.php');
  }
  addUser(info) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'users/addUser.php', info);
  }
  getOneUser(id) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'users/getSingleUser.php', {
      "id": id,
    });
  }
  updateUser(info) {
    console.log(info) ;
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'users/updateUser.php', info);
  }

  deleteUser(id) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'users/deleteUser.php', {
      id: id,
    });
  }
  authUser(info) {
    this.url = this.service.url;
    return this.httpclient.post(this.url + 'users/authUser.php',info);
  }
}
