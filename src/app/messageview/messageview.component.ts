import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messageview',
  templateUrl: './messageview.component.html',
  styleUrls: ['./messageview.component.css']
})
export class MessageviewComponent implements OnInit {
@Input() subjectChild:any;
data:any ;
constructor(private activatedRoute:ActivatedRoute){
  // console.log(this.activatedRoute.snapshot.params);
  this.activatedRoute.params.subscribe(sub=>{
   
    this.data =sub
  })
  
}
obj:any=[];
ngOnInit(): void {
 console.log(JSON.parse(this.data.id));
this.obj.push(JSON.parse(this.data.id)) 
}
}
