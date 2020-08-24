import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import AutoNumeric from 'autonumeric';
import { ConstantsService } from 'src/app/services/constants.service';
@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.scss']
})
export class EditorderComponent implements OnInit {
  orderForm: FormGroup;
  deliveries:any [];
  driverId: any;
  id: number;
  info: any;
  infomessage = '';
  submitted = false;
  message: any;
  invalidLogin: boolean;
  selected: any;
  loggedIn = false;
  anElement1: any;
  anElement2: any;
  anElement3: any;
  anElement4: any;
  selectedUser: any;

  constructor(
    private service: OrderService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private userservice: UserService,
    private constantsservice : ConstantsService

  ) { }

  users: User[] = [];
  ngOnInit(): void {
    this.deliveries=["yes","no"]
    this.getusers();
    this.anElement1 = new AutoNumeric('#num', {
      digitGroupSeparator: '',
      decimalCharacter: '.',
      decimalPlaces: 0,
      maximumValue: '99999999999999999',
      minimumValue: '0',

      watchExternalChanges: true
    });
    this.anElement2 = new AutoNumeric('#phone', {
      digitGroupSeparator: '',
      decimalCharacter: '.',
      decimalPlaces: 0,
      maximumValue: '99999999999999999',
      minimumValue: '0',

      watchExternalChanges: true
    });
    this.anElement3 = new AutoNumeric('#priority', {
      digitGroupSeparator: '',
      decimalCharacter: '.',
      decimalPlaces: 0,
      maximumValue: '99999999999999999',
      minimumValue: '0',
      watchExternalChanges: true
    });
    
    this.id = this.route.snapshot.params["id"];
    this.orderForm = this.formBuilder.group({
      num: ['', Validators.required],
      ordername: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      priority: ['', Validators.required],
      postcode: ['', Validators.required],
      info: [''],
      driver: ['', Validators.required],
      drivercomments: [''],
      delivered: [''],
      datetime: ['']
    });
    this.getOneOrder(this.id);
  }
  getOneOrder(id) {

    this.service.getOneOrder(id).subscribe(data => {
      console.log(data);
      this.constantsservice.imgName = data[0].fileName ;
      this.sendMessage();
      console.log(this.constantsservice.imgName) ;
      this.driverId = data[0].driverId;
      this.orderForm = this.formBuilder.group({
        num: data[0].number,
        ordername: data[0].ordername,
        address: data[0].address,
        phone: data[0].phone,
        priority: data[0].priority,
        postcode: data[0].postcode,
        info: data[0].info,
        drivercomments: data[0].drivercomments,
        driver: [data[0].driverId],
        delivered: data[0].delivered,
        datetime: data[0].datetime
      });
    })
  }
  get f() {
    return this.orderForm.controls;
  }
  onSubmit() {
    this.info = {
      id: this.id,
      num: this.orderForm.controls.num.value,
      ordername: this.orderForm.controls.ordername.value,
      address: this.orderForm.controls.address.value,
      phone: this.orderForm.controls.phone.value,
      priority: this.orderForm.controls.priority.value,
      postcode: this.orderForm.controls.postcode.value,
      info: this.orderForm.controls.info.value,
      fileName: this.constantsservice.imgName ,
      drivercomments: this.orderForm.controls.drivercomments.value,
      driverId: this.orderForm.controls.driver.value,
      delivered: this.orderForm.controls.delivered.value,
      datetime: this.orderForm.controls.datetime.value
    };
    console.log(this.info);
    this.service.updateOrder(this.info).subscribe((data: any) => {
      if (data.message == "success") {
        this.openSnackBar("Data Updated");
        this.constantsservice.imgName="";
        this.goback()
          ;
      }
      else {
        this.openSnackBar("Data Could Not Be Updated");
      }
    })

  }
  openSnackBar(str) {
    this.snackbar.open(str, '', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
  goback() {
    if(this.constantsservice.comingFromdDelivered)
    {
      this.router.navigate(['/admin/delivered']); 
    }
    else if(this.constantsservice.comingFromdUnDelivered){
      this.router.navigate(['/admin/undelivered']); 
    }
    else{
      this.router.navigate(['/admin']);
    }
    
  }
  getusers() {
    this.userservice.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);

    });
  }
  change(e) {

    console.log(e.target.value.userid);
    this.selected = e.target.value;
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.constantsservice.sendMessage(this.constantsservice.imgName);
}
}
export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public password: string,
    public userid?: number
  ) { }
}
