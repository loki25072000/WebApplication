import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stared-message',
  templateUrl: './stared-message.component.html',
  styleUrls: ['./stared-message.component.css']
})
export class StaredMessageComponent implements OnInit{
constructor(private http:HttpClient,private service:DatabaseService,private router:Router){}
allData:any;
staredData:any=[];
ngOnInit(): void {

  this.service.getAllDetails().subscribe(sub=>{
    // console.log(sub);

    this.allData =sub
    for(let data of this.allData){
      if(data.star=="stared"){
        console.log(data);
this.staredData.push(data)
        
      }
    }
    console.log(this.staredData);
    
  })
}
view(index:any){
  this.getOneDetail(index)
}


getOneDetail(ind:any){

  this.service.GetOnedetail(ind).subscribe(sub=>{

   
   let data=JSON.stringify(sub) 
   this.router.navigate(["viewDetails/", data])
  })

}
addStar(id:any){

  let myDiv = <HTMLElement>document.getElementById(id);
  console.log(myDiv);
  
     let curr = this.allData.find((p: { userId: any; })=>{
    
       return p.userId==id
     })
     if(curr.star==null){

      curr.star="stared"
           this.service.Edituser(id,curr).subscribe(sub=>{
           })
     }
     else{

      curr.star=null
           this.service.Edituser(id,curr).subscribe(sub=>{
           })
     }
     if( curr.userId==id){
if(curr.star==null){
  myDiv.style.color="black"
}
else{
  myDiv.style.color="#18589b"
}
     }
     
}
}
