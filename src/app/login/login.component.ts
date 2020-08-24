import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsService } from '../services/constants.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  infomessage = '';
  submitted: boolean = false;
  message: any;
  invalidLogin: boolean;
  loggedIn: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router,
    private constantsservice: ConstantsService
  ) {}

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
  
    if (this.loginForm.invalid) {
      this.infomessage = 'Invalid input';
      return;
    }

    this.getUser(this.loginForm.value);
  }
  //

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
  getUser(info) {
    this.infomessage = 'Please wait while we log you in';
    this.service.authUser(info).subscribe((data: any) => {
      
     console.log(data);

      if (data.token) {
        
        this.loggedIn = true;
        this.constantsservice.user = data;
        this.invalidLogin = false;
        console.log(data.token);
        if (data.isadmin == 'yes') {
          this.router.navigate(['admin']);

        } else {
          this.constantsservice.userid= data.userid;
         
          this.router.navigate(['driver']);
          //window.localStorage.setItem('userid', data.userid);
        }
        //window.localStorage.setItem('token', data.token);
        //window.localStorage.setItem('isadmin', data.isadmin);
      } else {

        this.infomessage = 'Invalid Credentials.Could not login';
        this.invalidLogin = true;
        this.loggedIn = false;

      }
    });
  }
  /* checkuserloggedin(){
    let token1 = window.localStorage.getItem('token');
    let token2 = window.localStorage.getItem('isadmin');
    let token3 = window.localStorage.getItem('userid');
    if (token1) {

      this.loggedIn = true;
      this.invalidLogin = false;

      if (token2 == 'yes') {
        this.router.navigate(['admin']);

      } else {
        this.router.navigate(['driver']);
      }
    }
  }*/
}
