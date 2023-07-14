import { Component, ElementRef, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
constructor(private service : DatabaseService, private router:Router,private el: ElementRef,private toastr: ToastrService,){}
allData:any;
ngOnInit(): void {
  this.service.getAllDetails().subscribe(sub=>{
  
    this.allData =sub
  
    
  })
}

addStar(id:any){

  let myDiv = <HTMLElement>document.getElementById(id);
     let curr = this.allData.find((p: { userId: any; })=>{
    
       return p.userId==id
     })
     if(curr.star==null){
      console.log(curr);
      curr.star="stared"
           this.service.Edituser(id,curr).subscribe(sub=>{
           })
     }
     else{
      console.log(curr);
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

detail:any;
view(index:any){
  this.getOneDetail(index)
}


getOneDetail(ind:any){

  this.service.GetOnedetail(ind).subscribe(sub=>{

   
   let data=JSON.stringify(sub) 
   this.router.navigate(["viewDetails/", data])
  })

}
data:any;
id:any;
editDetail(id:any){


let curr = this.allData.find((p: { id: any; })=>{
  
   return p.id==id
 })

}
showSuccess() {
  this.toastr.success('Added to star', 'star',{
    progressBar:true,
    timeOut:600,
  });
}
showError() {
  this.toastr.error('removed', 'star',{
    progressBar:true,
    timeOut:600,
  });
  
}
}
