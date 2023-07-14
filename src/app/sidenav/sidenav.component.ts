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
stardeMessCount:any=[]
ngOnInit(): void {
  this.service.getAllDetails().subscribe(sub=>{
    // console.log(sub);

    this.message =sub
    for (let item of this.message) {
      if (item.star =="stared") {
         this.stardeMessCount=item
        
      }
  }      
console.log(this.stardeMessCount.length);

  
    this.messageCount= this.message.length
 
    
  })
}
}
