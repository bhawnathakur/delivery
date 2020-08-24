import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss'],
})
export class NewuserComponent implements OnInit {
  userForm: FormGroup;
  submitted: any;
  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private constantsservice: ConstantsService
  ) {}

  ngOnInit(): void {
    
    this.constantsservice.setOrderPageIndex=0;
   this.constantsservice.setUnDeliveredPageIndex =0;
  this.constantsservice.setDeliveredPageIndex =0;
  
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.addUser(this.userForm.value);
    this.openSnackBar('Order Submitted');
    this.onReset();
  }
  //

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
  addUser(info) {
    console.log(info);
    this.service.addUser(info).subscribe((data: any) => {
      console.log(data);
      if (data.message == 'success') {
        this.openSnackBar('User Submitted');
      } else {
        this.openSnackBar('User could not be Submitted');
      }
    });
  }

  openSnackBar(str) {
    this.snackbar.open(str, '', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
  goback(){
this.router.navigate(['/admin/users']) ;
  }
}
