import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  users: User[] = [];
  url: string;
  filterval: any;
  filteredvalue: any;
  displayedColumns: string[] = [
    "name",
    "username",
    "password",

    "actions1",
    "actions2"
  ];
  constructor(
  private service: UserService,
  private dialog : MatDialog,
  private router : Router,
  private constantsservice: ConstantsService

  ) { }
  public dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isLoading = true;
  ngOnInit(): void {
      
    this.constantsservice.setOrderPageIndex=0;
   this.constantsservice.setUnDeliveredPageIndex =0;
  this.constantsservice.setDeliveredPageIndex =0;

    this.getUsers();
  }
getUsers(){
  this.service.getUsers().subscribe((data: any)=>{
    this.users = data;
    this.isLoading = false;
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }) ;
  this.filteredvalue ="";
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return this.users.name.toLowerCase().includes(filter);
    };
}
edit(id){
this.router.navigate(['/admin/users/edit/'+id])
}
delete(id){
 this.service.deleteUser(id).subscribe(data=>{
  this.isLoading = true;
  this.getUsers();
})
}
refresh(){
 
  this.getUsers() ;
}
 applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredvalue = filterValue ;
    console.log(this.dataSource.filter);
    //let filteredData = this.dataSource.filteredData;
    //console.log(filteredData );
  }
}
export class User {
  constructor(
    public userid: number,
    public name: string,
    public username: string,
    public password: string,
     ) { }
}
