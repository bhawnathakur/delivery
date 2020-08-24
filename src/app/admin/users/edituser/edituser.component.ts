import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  userForm: FormGroup;
  submitted: any;
  id: number ;
  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private route : ActivatedRoute ,
    private router : Router

  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"] ;
    this.getSingleUser(this.id) ;
    console.log(this.id) ;
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
    console.log(this.userForm.value) ;
    this.updateUser(this.userForm.value);
     this.onReset();
  }
  //

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
  updateUser(info) {
    info.id=this.id;
    this.service.updateUser(info).subscribe((data: any) => {
      console.log(data);
      if (data.message == 'success') {
        this.openSnackBar('User Submitted');
        this.router.navigate(['/admin/users'])
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
  getSingleUser(id){

    this.service.getOneUser(id).subscribe((data: any)=>{
      console.log(data);
      this.userForm = this.formBuilder.group({
        name:  data[0].name,
        username: data[0].username,
        password: data[0].password,
      });
    })
  }
  goback(){
    this.router.navigate(['/admin/users'])
  }
}
