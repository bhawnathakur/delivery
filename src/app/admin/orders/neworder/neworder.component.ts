import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import AutoNumeric from 'autonumeric';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.scss'],
})
export class NeworderComponent implements OnInit {
  orderForm: FormGroup;
  infomessage = '';
  submitted = false;
  message: any;
  invalidLogin: boolean;
  selected: any ;
  loggedIn = false;
  anElement1: any;
  anElement2: any;
  anElement3: any;
  anElement4: any;
  selectedUser: any;
  constructor(
    private service: OrderService,
    private userservice: UserService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private contantsservice : ConstantsService
  ) {}
  users: User[] = [];
  formData: any;
  fileName: any;
  ngOnInit(): void {
    console.log(this.contantsservice.imgName);
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
    

    this.orderForm = this.formBuilder.group({
      num: ['', Validators.required],
      ordername: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      priority: ['', Validators.required],
      postcode: ['', Validators.required],
      info: [''],
      driver: ['', Validators.required]
    });
  }
  get f() {
    return this.orderForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.fileName = this.contantsservice.imgName;
console.log(this.contantsservice.imgName);
    if (this.orderForm.invalid) {
     return;
    }
    this.formData = this.orderForm.value;
    console.log(this.fileName) ;
    this.formData.fileName= this.fileName;
    console.log(this.formData) ;
    this.addOrder(this.formData);
    this.contantsservice.imgName="";
    this.onReset();
  }
  //

  onReset() {
    this.submitted = false;
    this.orderForm.reset();
  }
  addOrder(info) {
    this.service.addOrder(info).subscribe((data: any) => {
      console.log(data);
      if (data.message == 'success') {
        this.openSnackBar('Order Submitted');
this.router.navigate(['/admin'])
      } else {
        this.openSnackBar('Order could not be Submitted');
      }
    });
  }

  openSnackBar(str) {
    this.snackbar.open(str, '', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
  getusers() {
    this.userservice.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }
  change(e){

console.log(e.target.value) ;
this.selected=e.target.value;
  }
  goback(){
    this.router.navigate(['/admin'])
  }
}
export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public password: string,
    public userid?: number
  ) {}
}
