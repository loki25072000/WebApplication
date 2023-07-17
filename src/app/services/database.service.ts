import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
// loginURL="https://localhost:7043/api/Login/"
loginURL ="https://localhost:7043/api/Login/"
usersURL ="https://localhost:7043/api/Users"
AllDetailsURL ="https://localhost:7043/api/Users"
getOneDetails="https://localhost:7043/api/Users/"
EditUrl ="https://localhost:7043/api/Users/"
imageUploadUrl="https://localhost:7043/api/Users/UploadImage"

  constructor(private http :HttpClient) { }
  // LoginMethod(username:any,password:any){
  //   return this.http.get(this.loginURL)
  // }
  login(loginObj:any){
return this.http.post(`${this.loginURL}authenticate`,loginObj)
  }
  storeUser(username:any){
    sessionStorage.setItem('username', username);
  }
  getuser(){
    return sessionStorage.getItem('username');
  }
  storeRole(role:any){
    
    sessionStorage.setItem('Role', role);
  }
  getRole(){
    
   return sessionStorage.getItem('Role');
  }
  setMessageCount(messCount:any){
    sessionStorage.setItem('messageCount', messCount);
  }
  getMessageCount(){
   return sessionStorage.getItem('messageCount' );
  }
  storeToken(tokenValue:string){
    
    sessionStorage.setItem('token', tokenValue);
  }
  getToken(){
    
    return sessionStorage.getItem('token');
  }
  isLoggedin():boolean{
    return !!sessionStorage.getItem('token')
  }
  userPost(data:any){
    return this.http.post(this.usersURL,data)
  }
  getAllDetails(){
return this.http.get(this.AllDetailsURL);
  }
  GetOnedetail(id:any){
    
    return this.http.get(this.getOneDetails+id)
  }
  Edituser(id:any,value:any){
    
    return this.http.put(this.EditUrl+id,value)
  }
  // ImageUpload(image:any){
  //   return this.http.post(this.imageUploadUrl,image)
  // }
}
