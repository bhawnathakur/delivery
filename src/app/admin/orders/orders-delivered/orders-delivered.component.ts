import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { OrderService } from 'src/app/services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ConstantsService } from 'src/app/services/constants.service';
import { FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

import { DeletedialogComponent } from '../orderlist/deletedialog/deletedialog.component';

@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.scss']
})
export class OrdersDeliveredComponent implements OnInit {
  anElement1 : any;
  orders: Order[] = [];
  url: string;
  drivers: any;
  filterval: any;
filteredvalue: any;
anio: number = new Date().getFullYear();
  manio: number = new Date().getMonth();
testbool:boolean=true;
setpage: any ;
  displayedColumns: string[] = [
    "download",
    "priority",
    "num",
    "postcode",
    "driver",
    "status",

    "actions1",
    "actions2"

  ];
  constructor(
  private service: OrderService,
  private dialog : MatDialog,
  private router : Router,
  private ordeService : OrderService,
  private constantsservice: ConstantsService,
  private _httpClient: HttpClient,
  private _FileSaverService: FileSaverService,
  private snackbar : MatSnackBar

  ) { 
  

  }
  public dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  isLoading = true;
  ngOnInit(): void {
    this.constantsservice.comingFromdDelivered=true;
    this.constantsservice.comingFromdUnDelivered=false;
    this.setpage =this.constantsservice.setDeliveredPageIndex;
    this.constantsservice.setOrderPageIndex=0;
  
  this.constantsservice.setUnDeliveredPageIndex =0;
  //this.constantsservice.setDeliveredPageIndex =0;
    if(this.anio==2020 && this.manio < 7)
    {
      this.testbool=true;

    }
    else{
      this.testbool=false;
    }


    this.filteredvalue ="";
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.driver.toLowerCase().includes(filter);
    };
   
    this.url=this.constantsservice.url ;
    this.getOrders();
console.log(this.setpage);

  }
getOrders(){
  this.service.getAdminDelivered().subscribe((data: any)=>{
    this.orders = data;
   console.log(this.orders.filter(x => x.name === 'Bolsta').length);
    console.log(this.orders) ;
    this.isLoading = false;

    this.dataSource = new MatTableDataSource(this.orders);
    this.dataSource.paginator = this.paginator;
    
    if(this.filteredvalue){
    this.applyFilter(this.filteredvalue) ;
  }
  }) ;
}
details(e){
  this.router.navigate(["/admin/details/" + e]);
}
edit(id){
  this.router.navigate(['/admin/edit/'+id]);
  
  }
  delete(id){

    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '300px',
      // data: {name: "this.namel"}
    });
  
  
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed" + result);
      if (result == "yes") {
      this.service.deleteOrder(id).subscribe(data=>{
     console.log(id) ;
    this.isLoading = true;
    this.getOrders();
    this.openSnackBar("date deleted") ;
  })
  
      }
    });
  
  }
  refresh(){
    //this.orders=[] ;
    this.getOrders() ;
  }
  anyFunction(){
    console.log('called from parent')
  }

  onDown(filename: string, fromRemote: boolean) {
    const fileName = filename;
    if (fromRemote) {
      this._httpClient.get(this.url+'uploads/'+fileName, {
        observe: 'response',
        responseType: 'blob'
      }).subscribe(res => {
        this._FileSaverService.save(res.body, fileName);
      });
      return;
    }
    const fileType = this._FileSaverService.genType(fileName);

  }
  updatepriority(evt,elementid,i){
let info:any ={
  id: elementid,
  priority:evt.target.value
};
//if(evt.target.value != this.orders[i].priority)
//{
  this.ordeService.updateOrderPriority(info).subscribe(data=>{

 this.refresh() ;

 //this.filteredvalue="test" ;
 //this.dataSource.filter = this.filteredvalue.trim().toLowerCase();

 console.log(this.filteredvalue) ;
 this.applyFilter(this.filteredvalue) ;
  this.openSnackBar("priority Updated") ;

  })

//}

  }

  openSnackBar(message: string) {
    this.snackbar.open(message,'',  {
      duration: 3000,
    });
  }
  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredvalue = filterValue ;
    console.log(this.dataSource.filter);
    //let filteredData = this.dataSource.filteredData;
    //console.log(filteredData );
  }

getVal(){
  this.refresh();
let e= this.filteredvalue ;
console.log(e);
console.log(e);
if(e !=""){
  this.applyFilter(e) ;
}
}
paginationClicked(evt){
  console.log(evt);
  this.constantsservice.setDeliveredPageIndex=evt.pageIndex ;
  
}
}
export class Order {
  constructor(
    public id: number,
    public num: number,
    public name: string,
    public address: string,
    public phone: number,
    public priority: number,
    public driver: string,
    public delivered: string,
    public datetime: string,

  ) {
    
  }
}
