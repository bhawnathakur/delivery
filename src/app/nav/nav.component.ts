import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../services/constants.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output("refreshAdmin") goToAdmin: EventEmitter<any> = new EventEmitter();
message: string;
  constructor(private router: Router,private constantsservice: ConstantsService) { }

  ngOnInit(): void {
 this.constantsservice.getMessage().subscribe(message => { this.message = message.text;

console.log(message) ;
}) ;
  }
neworder(){
  this.router.navigate(['/admin/new'])
}
orderlist(){
  this.router.navigate(['/admin'])
}
newuser(){
  this.router.navigate(['/admin/users/new'])
}
userslist(){
  this.router.navigate(['/admin/users'])
}
deliveredOrders(){
  this.router.navigate(['/admin/delivered'])
}
checkedOrders(){
  this.router.navigate(['/admin/checked'])
}
undeliveredOrders(){
  this.router.navigate(['/admin/undelivered'])
}
logout(){
  //window.localStorage.removeItem("token") ;
  this.router.navigate(['/']) ;
}
refresh(){
  console.log("emitted");
  this.goToAdmin.emit();
}

}
