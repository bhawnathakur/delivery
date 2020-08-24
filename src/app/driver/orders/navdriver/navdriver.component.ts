import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navdriver',
  templateUrl: './navdriver.component.html',
  styleUrls: ['./navdriver.component.scss']
})
export class NavdriverComponent implements OnInit {
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  token: any;
  isvisible = false ;
  constructor(

    private router: Router
  ) {}

  ngOnInit(): void {


   // this.token = window.localStorage.getItem('token');

   // if (!this.token || this.token =="sdajgksajdhksdhpo7pooylkhsadlkjhlsadlhljkdsahkljhdsaajhklksdajhkjhsdkjhuyp9i") {
     // this.router.navigate(['']);
   // }

  }
  gotoDelivered(){
this.router.navigate(['/driver/delivered']) ;
  }
  gotoUndelivered(){
    this.router.navigate(['/driver']) ;
  }
  logout(){
   // window.localStorage.removeItem("token");
   // window.localStorage.removeItem("userid");
   this.router.navigate(['/']) ;
  }
  clicked(){
    this.parentFun.emit();
    console.log("clicked");

  }

}
