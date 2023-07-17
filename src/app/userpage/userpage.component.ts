import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  usersGroup!: FormGroup;
  constructor(private fb: FormBuilder, private service: DatabaseService,private router:Router) {

  }
username:any;
role:any;
  ngOnInit(): void {
this.role = this.service.getRole();
if(this.role=="users"){

  this.usersGroup = this.fb.group({
    to: ["", Validators.required],
    subject: ["", Validators.required],
    Message: ["", Validators.required]
  })

this.username =this.service.getuser()

  console.log(this.service.getToken());

}
else{
  this.router.navigate(['/'])
}
  }
  sendMessage() {
    let FormGroupData = this.usersGroup.value;
    // this.service.getuser()

   let username = sessionStorage.getItem('username')
   FormGroupData.username =username
    FormGroupData.time = this.time + ":" + this.min;
    FormGroupData.date = this.date.toDateString()
    console.log(FormGroupData);

    this.service.userPost(FormGroupData).subscribe(sub => {
      console.log(sub);

    })
this.usersGroup.reset()
  }
  date: Date = new Date();
  time = this.date.getHours();
  min = this.date.getMinutes();
}
