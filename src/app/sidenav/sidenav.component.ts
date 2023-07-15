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
starArry:any=[]
starCount:any;
ngOnInit(): void {
  this.service.getAllDetails().subscribe(sub=>{
    this.message =sub
    this.messageCount= this.message.length
    for(let data of this.message){
   if(data.star=='stared')
      this.starArry.push(data.star)
    }
    console.log(this.starArry.length);
    this.starCount=this.starArry.length
  })
  
}

}
