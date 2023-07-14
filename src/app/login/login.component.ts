import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private toastr: ToastrService, private fb: FormBuilder, private router: Router, private http: HttpClient, private service: DatabaseService) { }
  loginGroup!: FormGroup;
  settimer: any
  ngOnInit(): void {
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    clearInterval(this.settimer)
    this.settimer = setInterval(() => this.setTimer(0), 900);
  }

  users: any;

  login() {

    var User = this.loginGroup.value.username
    var Password = this.loginGroup.value.password

    // this.service.LoginMethod(User, Password).subscribe(sub => {
    //   this.users = sub
    //   console.log(sub);
    //   if (this.users.role == 'Admin') {
    //     this.showSuccess()
    //     this.router.navigateByUrl("/admin")
    //   }
    //   else {
    //     this.showSuccess()
    //     this.router.navigateByUrl("/users")
    //   }

    // })
    // console.log(this.users);
    // if (Password == '' && User == '') {
    //   this.showError()

    // }
    // else if (Password != 'Admin@123' || Password != 'User@123') {
    //   this.showError()

    // }
    this.service.login(this.loginGroup.value).subscribe({
      next: (res:any) =>{
        console.log(res);
        this.loginGroup.reset();
   
        this.service.storeToken(res.token)
        this.service.storeUser(res.username)
        this.showSuccess()
        if(res.role=="Admin"){
          this.router.navigate(["/admin"])
        }
       else{
        this.router.navigate(["/users"])
       }
      },error:(err)=>{
        console.log(err);
        this.showError()
      }
    })
  }
  timer:any = []
timer_img = "assets/images/1.png"
setTimer(value: any) {
  var values:any = value
  this.timer.push([values])
  this.timer_img = `assets/images/${this.timer.length}.png`
  if (this.timer.length >= 6) {
    this.timer_img = "assets/images/6.png"
    clearInterval(this.settimer)
  }
}
  showSuccess() {
    this.toastr.success('Login Successful', 'Login',{
      progressBar:true,
      timeOut:600,
    });
  }
  showError() {
    this.toastr.error('Invalid User', 'Login filed',{
      progressBar:true,
      timeOut:600,
    });
    
  }
}
