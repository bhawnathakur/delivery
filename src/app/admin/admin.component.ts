import { Component, OnInit,ContentChild} from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../services/constants.service';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
   providers: [OrderlistComponent]
})
export class AdminComponent implements OnInit {
 somefn: any ;
  onActivate(componentReference) {
    console.log(componentReference);
    this.somefn=  componentReference ;
    //componentReference.anyFunction();
 }

  token: any
  constructor(
    private router: Router,
    private constantsservice : ConstantsService

    ) { }

  ngOnInit(): void {
  // this.token = window.localStorage.getItem("token") ;
  this.token ="sdajgksajdhksdhpo7pooylkhsadlkjhlsadlhljkdsahkljhdsaajhklksdajhkjhsdkjhuyp9i" ;
   if(!this.token || this.token !="sdajgksajdhksdhpo7pooylkhsadlkjhlsadlhljkdsahkljhdsaajhklksdajhkjhsdkjhuyp9i" )
   {
this.router.navigate(['']) ;
   }
  }
  refreshAdmin(e){
    this.somefn.refresh() ;
  }
  onClick(){
    console.log("clicked") ;
    this.somefn.anyFunction()
;  }
}
