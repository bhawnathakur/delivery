import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstantsService } from 'src/app/services/constants.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  orderForm: FormGroup;
  id: number;
  sendid: any;
  sendinfo: any =[];
  constructor(
    private service: OrderService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private constantsservice : ConstantsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderForm = this.formBuilder.group({
      num: [''],
      priority: [''],
      ordername: [''],
      address: [''],
      phone: [''],

      postcode: [''],
      info: [''],
      drivercomments: [''],
      driver: [''],
      delivered: [''],
      datetime: [''],
    });
    this.getOneOrder(this.id);
  }
  getOneOrder(id) {
    this.service.getOneOrder(id).subscribe((data) => {
      console.log(data);
      console.log(data[0].id) ;
      this.sendid = data[0].id;
      this.orderForm = this.formBuilder.group({
        num: data[0].number,
        priority: data[0].number,
        ordername: data[0].ordername,
        address: data[0].address,
        phone: data[0].phone,
        postcode: data[0].postcode,
        info: data[0].info,
        driver: data[0].name,
        drivercomments: data[0].drivercomments,
        delivered: data[0].delivered,
        datetime: data[0].datetime,
      });
    });
  }
  goBack() {
    if(this.constantsservice.onDelivered){
      this.router.navigate(['/driver/delivered']);
    }
    else{
      this.router.navigate(['/driver']);
    }

  }
  refresh() {
    this.getOneOrder(this.id);
  }
  onSubmit() {
    this.sendinfo = {
      id : this.sendid,
      drivercomments: this.orderForm.controls.drivercomments.value
    }
     ;
    this.service.addcomments(this.sendinfo).subscribe((data: any)=>
    {
      if(data.message=="success"){
        this.openSnackBar("Your Comments added") ;
      }
      else{
        this.openSnackBar("Your Comments Could Not Be added") ;
      }
    }) ;
  }
  openSnackBar(str) {
    this.snackbar.open(str, '', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}
export class Info
{
  id: number;
  drivercomments: string;
}

