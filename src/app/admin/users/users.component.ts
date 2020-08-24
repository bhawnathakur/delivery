import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private constantsservice:ConstantsService) { }

  ngOnInit(): void {
    this.constantsservice.setOrderPageIndex=0;
   this.constantsservice.setUnDeliveredPageIndex =0;
  this.constantsservice.setDeliveredPageIndex =0;
  }

}
