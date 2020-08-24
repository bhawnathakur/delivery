import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { OrderService } from 'src/app/services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { ConstantsService } from 'src/app/services/constants.service';
@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {
  orders: Order[] = [];
  url: string;
  drivers: any;
  userid: any;
  message: string ;
  displayedColumns: string[] = [
    "priority",
    "num",
    "phone",
    "postcode",
    "actions1"

  ];
  constructor(
    private service: OrderService,
    private dialog : MatDialog,
    private router : Router,
    private constantsservice: ConstantsService

  ) { }
  public dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isLoading = true;
  ngOnInit(): void {
    this.userid =  this.userid = this.constantsservice.userid ;
   // console.log(this.userid) ;
     this.getOrders(this.userid);
     this.constantsservice.onDelivered = true;
  }
getOrders(id){
  this.service.deliveredOrders(id).subscribe((data: any)=>{
console.log(data);
    this.orders = data;
    this.isLoading = false;
    if(!data.result)
    {

     this.dataSource = new MatTableDataSource(this.orders);
    this.dataSource.paginator = this.paginator;
  }
  }) ;
}
details(e){
  this.router.navigate(['/driver/details/'+e]) ;
    }
    refresh(){
      this.getOrders(this.userid);
      console.log("delivered refresh clicked");
    }

}
export class Order {
  constructor(
    public id: number,
    public num: number,
    public name: string,
    public address: string,
    public phone: number,

    public driver: string,
    public delivered: string,
    public datetime: string,

  ) {}
}
