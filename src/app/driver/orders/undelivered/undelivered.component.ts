import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { OrderService } from 'src/app/services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { DeliveredDialogComponent } from '../delivered-dialog/delivered-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstantsService } from 'src/app/services/constants.service';
@Component({
  selector: 'app-undelivered',
  templateUrl: './undelivered.component.html',
  styleUrls: ['./undelivered.component.scss']
})
export class UndeliveredComponent implements OnInit {
  orders: Order[] = [];
  url: string;
  drivers: any;
  userid: any;
  message: string ;
  isloading = true ;
  displayedColumns: string[] = [
    "priority",
    "num",

    "phone",
    "postcode",

    "actions1",
    "actions2"

  ];
  constructor(
  private service: OrderService,
  private dialog : MatDialog,
  private router : Router,
  private userService : UserService,
  private snackbar: MatSnackBar,
  private constantsservice: ConstantsService
  ) { }
  public dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isLoading = true;
  ngOnInit(): void {
    this.userid = this.constantsservice.userid ;
     this.getOrders(this.userid);

this.constantsservice.onDelivered = false;
  }
getOrders(id){

  this.service.undeliveredOrders(id).subscribe((data: any)=>{

    this.isLoading=false;
if(data.result){
  console.log("no data") ;
  this.orders = [];

    this.dataSource = new MatTableDataSource(this.orders);

    this.dataSource.paginator = this.paginator;
}
else{
    this.orders = data;

    this.dataSource = new MatTableDataSource(this.orders);

    this.dataSource.paginator = this.paginator;
  }
  }) ;
}
deliver(e){

  const dialogRef = this.dialog.open(DeliveredDialogComponent, {
    width: '300px',
    // data: {name: "this.namel"}
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log("The dialog was closed" + result);
    if (result == "yes") {
   this.service.updateDeliveredOrder(e).subscribe((data)=> {
    if(!result){
      return;
    }
    this.isloading = true ;

    this.getOrders(this.userid);

   }) ;

    }
  });
}

  delete(id){
   this.service.deleteOrder(id).subscribe(data=>{

      this.isLoading = true;
    this.getOrders(this.userid);

  })
  }


  details(e){
this.router.navigate(['/driver/details/'+e]) ;
  }
  openSnackBar(str) {
    this.snackbar.open(str, '', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
  refresh(){
    this.getOrders(this.userid);
    this.paginator._changePageSize(this.paginator.pageSize) ;
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
