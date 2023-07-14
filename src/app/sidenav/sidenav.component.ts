import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
constructor(private service : DatabaseService){}
message:any;
messageCount:any
ngOnInit(): void {
  this.service.getAllDetails().subscribe(sub=>{
    // console.log(sub);

    this.message =sub

    if(this.message.star=="stared"){
      debugger
      console.log(this.message.length);
      
    }
    this.messageCount= this.message.length
    console.log(this.message);
    
  })
}
}
