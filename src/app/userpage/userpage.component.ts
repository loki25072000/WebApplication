import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  usersGroup!: FormGroup;
  constructor(private fb: FormBuilder, private service: DatabaseService,) {

  }
username:any;
  ngOnInit(): void {
    this.usersGroup = this.fb.group({
      to: ["", Validators.required],
      subject: ["", Validators.required],
      Message: ["", Validators.required]
    })

 this.username =this.service.getuser()

    console.log(this.service.getToken());

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

  }
  date: Date = new Date();
  time = this.date.getHours();
  min = this.date.getMinutes();
}
